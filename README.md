# kudzaishe.com

Personal site of [Kudzaishe George Zharare](https://www.kudzaishe.com). Vue 3, Vue Router, and Vite. Vercel builds production from `main`.

```bash
npm install
npm run dev
```

`npm run build` writes the static site and the extra SEO HTML pages. Homepage portrait: use `public/kudzigeorge-avatar.jpg` (432px), not the camera original.

The public résumé is `public/kudzaishe-zharare-cv.pdf`; its editable LaTeX source
and build instructions are in `resume/`.

The portfolio is one page: overview, expandable experience, three skills
groups, and expandable projects. `src/views/Home.vue` renders experience from
`src/data/experience.js` and capabilities from `src/data/skills.js`.
Writing remains at `/blogs` and `/article`. Earlier `/about`, `/experience`,
`/projects`, and `/flexid` URLs redirect to portfolio sections or project detail.
Keep Vercel redirects and Vue Router redirects aligned so old links work both
on direct requests and during in-app navigation.

Keep public copy focused on capabilities and evidenced outcomes. Do not add
company vendor mappings, internal configurations, or proprietary procedures.

Project descriptions live in `src/data/projects.js`. The organisations served
through CBZ are in `src/data/organisations.js`. Original logo assets are served
from `public/organisations/`; their sources are recorded in `SOURCES.md` there.
Set an entry's `logoSrc` to its root-relative image path. The organisation name
remains visible for readability and accessibility. Only entries with logos are
shown, and a tile is hidden if its image fails to load. Light panels keep the
original brand colours legible against the site's dark background.
