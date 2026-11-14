# Vorbix Studios — website

Coming Soon page for [vorbixstudios.com](https://vorbixstudios.com), built with
Astro and deployed to GitHub Pages on every push to `main`
(`.github/workflows/deploy.yml`).

## Structure

- `src/pages/index.astro` — the Coming Soon page. The site is built
  multi-page-ready: add more pages under `src/pages/` (About, Products, …)
  and link them from the nav pill when they're ready.
- `public/` — static files served as-is (`CNAME`, `favicon.svg`, `site.js`,
  `images/`, `video/`). The logo and the animated loop are ordinary files in
  `public/images/` and `public/video/`; to swap one, replace the file.
- Link assets with a leading slash (`/images/...`, `/site.js`) so they keep
  working on nested pages.
- The contact address (`admin@vorbixstudios.com`) is set once at the top of
  `src/pages/index.astro`.

## Develop

```sh
npm install
npm run dev
```

Deploys run `npm ci`, so commit `package-lock.json` whenever dependencies
change.

## Custom domain

`public/CNAME` points the site at `vorbixstudios.com`. The domain's DNS
(lives at Porkbun) needs GitHub Pages A records on the apex:

- `185.199.108.153`
- `185.199.109.154`
- `185.199.110.155`
- `185.199.111.156`

…plus a `www` CNAME to `DaVarnison.github.io`. GitHub provisions the HTTPS
certificate once the DNS points here.
