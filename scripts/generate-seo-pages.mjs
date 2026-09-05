import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory, createRouter } from 'vue-router'
import { seoByPath, siteUrl } from '../src/data/seo.js'

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const baseHtml = await readFile(join(distDirectory, 'index.html'), 'utf8')
const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const replaceMeta = (html, selector, value) => {
  const prefix = `<meta ${selector} content="`
  const start = html.indexOf(prefix)
  if (start < 0) throw new Error(`Missing metadata: ${selector}`)
  const valueStart = start + prefix.length
  const valueEnd = html.indexOf('"', valueStart)
  return html.slice(0, valueStart) + escapeHtml(value) + html.slice(valueEnd)
}

const renderPage = (path, metadata, content) => {
  const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, () => `<link rel="canonical" href="${canonicalUrl}">`)
    .replace('<div id="app"></div>', () => `<div id="app">${content}</div>`)
  for (const [selector, value] of [
    ['name="description"', metadata.description],
    ['property="og:title"', metadata.title],
    ['property="og:description"', metadata.description],
    ['property="og:url"', canonicalUrl],
    ['name="twitter:title"', metadata.title],
    ['name="twitter:description"', metadata.description]
  ]) html = replaceMeta(html, selector, value)
  return html
}

// Vite compiles the same Vue views at build time. No HTTP server is started.
// Each URL gets readable HTML, then the existing client app takes over navigation.
process.env.NODE_ENV = 'production'
const compiler = await createServer({ mode: 'production', optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, watch: null }, appType: 'custom' })
try {
  const views = { '/': 'Home', '/experience': 'Experience', '/projects': 'Projects', '/work': 'Work', '/about': 'About', '/blogs': 'Blogs', '/article': 'Article', '/flexid': 'FlexID' }
  const routes = []
  for (const [path, view] of Object.entries(views)) {
    const { default: component } = await compiler.ssrLoadModule(`/src/views/${view}.vue`)
    routes.push({ path, component })
  }
  const { default: App } = await compiler.ssrLoadModule('/src/App.vue')
  for (const [path, metadata] of Object.entries(seoByPath)) {
    const router = createRouter({ history: createMemoryHistory(), routes })
    const app = createSSRApp({ render: () => h(App) }).use(router)
    await router.push(path)
    await router.isReady()
    const content = await renderToString(app)
    if (!content.includes('<main')) throw new Error(`Missing page content: ${path}`)
    const outputPath = join(distDirectory, path === '/' ? 'index.html' : `${path.slice(1)}/index.html`)
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, renderPage(path, metadata, content), 'utf8')
  }
  console.log(`Generated ${Object.keys(seoByPath).length} pages with readable content and route-specific metadata.`)
} finally {
  await compiler.close()
}
