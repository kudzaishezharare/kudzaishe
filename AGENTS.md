# kudzaishe.com

Personal site. Vue 3 + Vue Router + Vite, deployed on Vercel from GitHub `main`.

After any site change in this repo, commit to `main` and `git push origin main` in the same session unless the user says not to.

## Teach while you change things

The owner uses this repo to learn. Do not only apply a patch.

When you edit code here:

1. **Say the issue in plain language** before or with the fix (what looks wrong, what the browser is actually doing).
2. **Name the files and the mechanism** — which view, which CSS class, which `public/` asset, which router path.
3. **Explain the why of the chosen approach**, and mention the main alternative you did not take.
4. **Point at the new code** so a reader can map the explanation to the file. Prefer a short citation over a dump of the whole file.
5. **Keep a glossary of project terms** in your reply the first time they appear (for example: view, `public/`, Vercel rewrite).

Do not assume prior chats. A later session should still be able to understand the change from `AGENTS.md` plus the reply.

## How the site is put together

| Piece | Where | What it is |
| --- | --- | --- |
| Pages | `src/views/` | One Vue file per route (`Home.vue`, `About.vue`, …) |
| Routes | `src/router.js` | Maps URLs to those views |
| Shared look | `src/assets/styles.css` | Global tokens (colors, fonts). Page-specific CSS lives in the view's `<style scoped>` |
| Static files | `public/` | Served as-is at the site root. Homepage portrait URLs are paths here, not imports |
| Project write-ups | `src/data/projects.js` | Copy for the projects page / modal |
| SEO HTML | `scripts/generate-seo-pages.mjs` | Runs after `vite build` |

Vercel serves the built `dist/` folder. `vercel.json` rewrites pretty paths (`/about`) to the matching HTML file.

## Portraits

The homepage avatar is **144 CSS pixels**. Serve a file sized for that slot (about 2–3×, so ~288–432px square), not a phone original.

- Homepage uses `public/kudzigeorge-avatar.jpg` (derived from `kudzigeorge-20260731.jpg`).
- About uses the smaller `public/kudzigeorge.jpg`.
- Do not point `<img class="avatar">` at a multi-megabyte camera JPEG. Browsers downscale those harshly: over-sharp skin and fabric, jagged circle crop, slow load.

If the photo itself should change, resize and square-crop a new avatar file; do not only swap the `src` to a full-resolution original.
