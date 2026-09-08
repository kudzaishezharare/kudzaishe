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
through CBZ are in `src/data/organisations.js`. Original logo assets are served
from `public/organisations/`; their sources are recorded in `SOURCES.md` there.
Set an entry's `logoSrc` to its root-relative image path. The organisation name
remains visible for readability and accessibility. Only entries with logos are
shown, and a tile is hidden if its image fails to load. Light panels keep the
original brand colours legible against the site's dark background.
