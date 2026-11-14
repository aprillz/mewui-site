export const links = {
  repo: "https://github.com/aprillz/MewUI",
  gallery: "https://aprillz.github.io/MewUI/Gallery/",
  nuget: "https://www.nuget.org/packages/Aprillz.MewUI/",
  skill: "https://github.com/aprillz/mewui-skill",
};

// The documentation site is built from the MewUI repository into /docs (scripts/build-docs.sh),
// with the Korean pages under /docs/ko/.
export function docsHome(lang: string): string {
  return lang === "ko" ? "/docs/ko/" : "/docs/";
}

export const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function asset(path: string): string {
  return `${base}/assets/${path}`;
}
