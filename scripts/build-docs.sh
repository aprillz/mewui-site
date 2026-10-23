#!/usr/bin/env bash
# Builds the MewUI documentation site (guides, markup reference and the API reference of the core
# assembly) from a checkout of the MewUI repository, so the landing site can serve it under /docs.
#
#   scripts/build-docs.sh <mewui-checkout> <site-base> <site-url>
#   scripts/build-docs.sh ../MewUI /docs https://mewui.aprillz.net
#
# Output: <mewui-checkout>/website/dist, ready to be copied to dist/docs of the landing build.
# Requires the .NET 10 SDK, Node 24 and npm. Mirrors tools/docs/build_api_docs.cmd of MewUI for
# the core package only; the publish scope stays the core until the other packages are reviewed.
set -euo pipefail
# Git Bash on Windows rewrites POSIX-looking values such as /docs into C:/Program Files/Git/docs when
# they reach a native process; these switches keep arguments and variables verbatim (no effect on Linux).
export MSYS_NO_PATHCONV=1 MSYS2_ARG_CONV_EXCL='*' MSYS2_ENV_CONV_EXCL='*'

# With conversion off, paths handed to .NET must already be in the form the host understands.
native_path() {
  if command -v cygpath >/dev/null 2>&1; then
    cygpath -m "$1"
  else
    printf '%s' "$1"
  fi
}

upstream="$(cd "$1" && pwd)"
site_base="${2:-/docs}"
site_url="${3:-https://mewui.aprillz.net}"
tfm="net10.0"
core_project="$(native_path "$upstream/src/MewUI/MewUI.csproj")"
core_dll="$(native_path "$upstream/src/MewUI/bin/Release/$tfm/Aprillz.MewUI.dll")"
audit_project="$(native_path "$upstream/tools/MewUI.MarkupAudit/MewUI.MarkupAudit/MewUI.MarkupAudit.csproj")"
audit_dll="$(native_path "$upstream/tools/MewUI.MarkupAudit/MewUI.MarkupAudit/bin/Release/$tfm/MewUI.MarkupAudit.dll")"
guide_links="$(native_path "$upstream/tools/docs/guide-links.json")"
api_build="$upstream/.artifacts/api-build"
api_build_native="$(native_path "$api_build")"
api_out="$upstream/website/src/content/docs/api"
api_out_native="$(native_path "$api_out")"

echo "== Building the MewUI core ($tfm, Release)"
dotnet build "$core_project" -c Release -f "$tfm" -p:CopyLocalLockFileAssemblies=true /nr:false

echo "== Building MewUI.MarkupAudit"
dotnet build "$audit_project" -c Release /nr:false

echo "== Generating the API reference with xmldocmd"
(cd "$upstream/tools/docs" && dotnet tool restore)
rm -rf "$api_build"
mkdir -p "$api_build"
# xmldocmd ships for an older runtime; rolling forward lets it load net10.0 assemblies.
(cd "$upstream/tools/docs" && DOTNET_ROLL_FORWARD=LatestMajor dotnet xmldocmd "$core_dll" "$api_build_native/Aprillz.MewUI" --visibility public --newline lf --clean --quiet)

version="$(sed -n 's/.*<MewUIVersion>\([^<]*\)<\/MewUIVersion>.*/\1/p' "$upstream/build/MewUI.Common.props" | head -n 1)"
commit="$(git -C "$(native_path "$upstream")" rev-parse HEAD)"
printf 'MewUIVersion=%s\nCommit=%s\n' "$version" "$commit" > "$api_build/version.txt"

echo "== Cross-linking properties and fluent extensions, writing index pages"
dotnet "$audit_dll" --api-crosslink "$api_build_native" "$core_dll"
dotnet "$audit_dll" --api-index "$api_build_native" "$core_dll"

echo "== Preparing the pages for Starlight (site base $site_base)"
rm -rf "$api_out"
mkdir -p "$api_out"
cp -R "$api_build/Aprillz.MewUI" "$api_out/Aprillz.MewUI"
cp "$api_build/index.md" "$api_out/index.md"
cp "$api_build/version.txt" "$api_out/version.txt"
dotnet "$audit_dll" --api-starlight "$api_out_native" --site-base "$site_base" --guide-links "$guide_links"

echo "== Building the documentation site"
(cd "$upstream/website" && npm ci && PUBLIC_SITE_BASE="$site_base" PUBLIC_SITE_URL="$site_url" npm run build && PUBLIC_SITE_BASE="$site_base" npm run check-links)

echo "== Done: $upstream/website/dist"
