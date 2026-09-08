# kudzaishe.com

Personal site of [Kudzaishe George Zharare](https://www.kudzaishe.com). Vue 3, Vue Router, and Vite. Vercel builds production from `main`.

```bash
npm install
npm run dev
```

`npm run build` writes the static site and the extra SEO HTML pages. Homepage portrait: use `public/kudzigeorge-avatar.jpg` (432px), not the camera original.

The public résumé is `public/kudzaishe-zharare-cv.pdf`; its editable LaTeX source
and build instructions are in `resume/`.

Project descriptions live in `src/data/projects.js`. The organisations served
through CBZ are in `src/data/organisations.js`. To add a logo later, place the
approved image in `public/organisations/` and set that entry's `logoSrc` to the
root-relative image path. The organisation name remains visible for readability
and accessibility. With no logo, the tile shows the name and sector.
