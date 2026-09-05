<template>
  <nav class="site-nav" aria-label="Main navigation">
    <router-link to="/" class="nav-name">Kudzaishe Zharare</router-link>
    <div class="site-nav-links">
      <router-link v-for="item in items" :key="item.to" :to="item.to" class="nav-item" exact-active-class="active">{{ item.label }}</router-link>
    </div>
    <a class="nav-contact" :href="roleEnquiry">Discuss a role</a>
  </nav>
</template>

<script setup>
import { roleEnquiry } from '../data/work'
const items = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Selected work' },
  { to: '/work', label: 'Work with me' },
  { to: '/about', label: 'About' },
  { to: '/blogs', label: 'Writing' }
]
</script>

<style scoped>
.site-nav { position: fixed; inset: 0 auto 0 0; width: 200px; padding: 48px 20px 24px; border-right: 1px solid var(--border); background: var(--bg-color); display: flex; flex-direction: column; z-index: 20; overflow-y: auto; }
.nav-name { color: var(--text-primary); font-size: 0.875rem; text-decoration: none; margin: 0 12px 32px; line-height: 1.6; }
.site-nav-links { display: flex; flex-direction: column; gap: 8px; }
.nav-item { color: var(--text-secondary); font-size: 0.875rem; text-decoration: none; padding: 10px 12px; border-radius: 4px; }
.nav-item:hover, .nav-item.active { color: var(--text-primary); background: rgba(164, 120, 90, 0.12); }
.nav-item.active { box-shadow: inset 2px 0 var(--accent); }
.nav-contact { margin: 32px 12px 0; color: var(--accent); font-size: 0.875rem; text-underline-offset: 5px; }
@media (max-width: 900px) {
  .site-nav { position: relative; width: 100%; padding: 16px 20px; border-right: 0; border-bottom: 1px solid var(--border); overflow: visible; }
  .nav-name, .nav-contact { display: none; }
  .site-nav-links { flex-direction: row; flex-wrap: wrap; gap: 4px; }
  .nav-item { padding: 8px 10px; }
  .nav-item.active { box-shadow: inset 0 -2px var(--accent); }
}
</style>
