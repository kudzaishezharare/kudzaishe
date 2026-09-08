<template>
  <div id="app">
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: { SiteFooter }
}
</script>

<style>
/* Global app styles can go here if needed */
</style>
