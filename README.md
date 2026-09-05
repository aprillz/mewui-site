# mewui-site

The MewUI website. Built with [Astro](https://astro.build) and deployed to
GitHub Pages.

- Live: https://aprillz.github.io/mewui-site/ (moving to `mewui.aprillz.net`)
- Framework repository: https://github.com/aprillz/MewUI

This repository holds the site only. It reads facts from the MewUI repository at
build time and never modifies it. The browser Gallery lives in the MewUI
repository and is linked, not built here.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys to
GitHub Pages. `PUBLIC_SITE_URL` and `PUBLIC_SITE_BASE` in that workflow decide
the public URL, so switching to the custom domain is a change to those two
values plus a `public/CNAME` file.
