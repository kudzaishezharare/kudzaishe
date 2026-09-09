import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './views/Blogs.vue'
import Article from './views/Article.vue'
import { defaultImage, seoByPath, siteUrl } from './data/seo'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: seoByPath['/']
  },
  {
    path: '/experience',
    name: 'Experience',
    redirect: to => ({ path: '/', hash: '#experience', query: to.query })
  },
  {
    path: '/about',
    name: 'About',
    redirect: to => ({ path: '/', hash: to.hash || '#skills-heading', query: to.query })
  },
  {
    path: '/projects',
    name: 'Projects',
    redirect: to => ({ path: '/', hash: to.hash || '#projects', query: to.query })
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: seoByPath['/blogs']
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: seoByPath['/article']
  },
  {
    path: '/flexid',
    name: 'FlexID',
    redirect: { path: '/', query: { project: 'flexid' }, hash: '#projects' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash && (to.hash !== from.hash || to.path !== from.path)) return { el: to.hash, top: 80 }
    if (to.path !== from.path) return { top: 0 }
  }
})

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const [name, property] = attribute === 'property' ? ['property', selector.match(/\[property="(.+)"\]/)?.[1]] : ['name', selector.match(/\[name="(.+)"\]/)?.[1]]
    element.setAttribute(name, property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

router.afterEach(to => {
  const title = to.meta.title || seoByPath['/'].title
  const description = to.meta.description || seoByPath['/'].description
  const canonicalUrl = `${siteUrl}${to.path === '/' ? '/' : to.path}`

  document.title = title
  setMeta('meta[name="description"]', 'name', description)
  setMeta('meta[property="og:title"]', 'property', title)
  setMeta('meta[property="og:description"]', 'property', description)
  setMeta('meta[property="og:url"]', 'property', canonicalUrl)
  setMeta('meta[property="og:image"]', 'property', defaultImage)
  setMeta('meta[name="twitter:title"]', 'name', title)
  setMeta('meta[name="twitter:description"]', 'name', description)
  setMeta('meta[name="twitter:image"]', 'name', defaultImage)

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)
})

export default router
