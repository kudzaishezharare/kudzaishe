import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Experience from './views/Experience.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Blogs from './views/Blogs.vue'
import Article from './views/Article.vue'
import FlexID from './views/FlexID.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/flexid',
    name: 'FlexID',
    component: FlexID
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
