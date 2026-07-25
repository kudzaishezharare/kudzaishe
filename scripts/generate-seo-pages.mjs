import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defaultImage, seoByPath, siteUrl } from '../src/data/seo.js'

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const baseHtml = await readFile(join(distDirectory, 'index.html'), 'utf8')

const replaceMeta = (html, selector, value) => {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return html.replace(new RegExp(`(<meta ${escapedSelector} content=")[^"]*(")`), `$1${value}$2`)
}

const renderPage = (path, metadata) => {
  const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonicalUrl}">`)

  html = replaceMeta(html, 'name="description"', metadata.description)
  html = replaceMeta(html, 'property="og:title"', metadata.title)
  html = replaceMeta(html, 'property="og:description"', metadata.description)
  html = replaceMeta(html, 'property="og:url"', canonicalUrl)
  html = replaceMeta(html, 'property="og:image"', defaultImage)
  html = replaceMeta(html, 'name="twitter:title"', metadata.title)
  html = replaceMeta(html, 'name="twitter:description"', metadata.description)
  html = replaceMeta(html, 'name="twitter:image"', defaultImage)
  return html
}

for (const [path, metadata] of Object.entries(seoByPath)) {
  if (path === '/') continue
  const outputPath = join(distDirectory, path.slice(1), 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderPage(path, metadata), 'utf8')
}

console.log(`Generated ${Object.keys(seoByPath).length - 1} route-specific SEO pages.`)
