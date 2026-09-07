// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Both are overridden by the workflow when the custom domain is switched on.
const site = process.env.PUBLIC_SITE_URL ?? "https://aprillz.github.io";
const base = process.env.PUBLIC_SITE_BASE ?? "/mewui-site";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", ko: "ko" },
      },
    }),
  ],
});
