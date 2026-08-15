import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css'

function openExternalLinksInNewTab(event) {
  const link = event.target.closest('a[href]')
  if (!link) return

  const href = link.getAttribute('href')
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
  if (link.hasAttribute('download')) return

  let url
  try {
    url = new URL(href, window.location.href)
  } catch {
    return
  }

  if (url.origin === window.location.origin) return
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return

  link.target = '_blank'
  const rel = new Set((link.rel || '').split(/\s+/).filter(Boolean))
  rel.add('noopener')
  rel.add('noreferrer')
  link.rel = [...rel].join(' ')
}

document.addEventListener('click', openExternalLinksInNewTab, true)

createApp(App).use(router).mount('#app')
