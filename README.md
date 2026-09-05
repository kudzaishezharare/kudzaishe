# kudzaishe.com

Personal site of [Kudzaishe George Zharare](https://www.kudzaishe.com). Vue 3, Vue Router, and Vite. Vercel builds production from `main`.

```bash
npm install
npm run dev
```

`npm run build` writes the static site and the extra SEO HTML pages. Homepage portrait: use `public/kudzigeorge-avatar.jpg` (432px), not the camera original.


## Hiring and contract content

- `src/views/Home.vue` leads with engineering capabilities and paid engagement paths.
- `src/views/Work.vue` describes roles, contract scopes, and contact options at `/work`.
- `src/data/work.js` keeps enquiry email links and contract offerings together. Links open a draft in the visitor's email app; the site does not submit messages.
- `src/components/SiteNav.vue` is shared across the main pages.
- `src/data/projects.js` contains case studies, contribution descriptions, and delivery stages. Preserve existing project IDs so shared links keep working.
- `scripts/generate-seo-pages.mjs` renders the same Vue views at build time, so all eight page URLs include readable HTML as well as page metadata.

The downloadable CV is the committed `public/kudzaishe-zharare-cv.pdf` asset. Its editable LaTeX source is under `resume/` and preserves the attached Awesome CV format. Regenerate it with `cd resume && xelatex resume.tex && xelatex resume.tex`, then copy `resume.pdf` to `public/kudzaishe-zharare-cv.pdf`. CV generation is a manual editorial step and is not needed for the Vercel build. Keep the CV and website career facts consistent. Cleva dates were confirmed as 2023 to 2025 on 5 September 2026.
