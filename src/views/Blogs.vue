<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/blogs" class="nav-item active">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1>Blogs</h1>

      <div class="item">
        <div class="meta">2023-05-15</div>
        <div class="details">
          <router-link to="/flexid" class="title">FlexID: Protocol for Insurable Identity</router-link>
          <div class="desc">Economic mechanism design for digital trust. How insurance transforms verifiable credentials into insured assets, creating markets for identity verification.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2025-11-24</div>
        <div class="details">
          <router-link to="/article" class="title">Context-Aware AI in Low Bandwidth Environments</router-link>
          <div class="desc">How to deploy resilient agents where connectivity is intermittent.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2025-08-14</div>
        <div class="details">
          <a href="#" class="title">The Future of Digital Identity in Africa</a>
          <div class="desc">Why mobile-first identity rails will leapfrog legacy systems.</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Blogs'
}
</script>

<style scoped>
.page-container {
  display: flex;
  min-height: 100vh;
}

.vertical-nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  background: var(--bg-color);
  border-right: 1px solid var(--border);
  padding: 80px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
}

.nav-item:hover,
.nav-item.active {
  color: var(--accent);
  background: rgba(164, 120, 90, 0.1);
}

.content {
  margin-left: 200px;
  max-width: 680px;
  margin: 80px auto;
  padding: 24px;
}

.content h1 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.item {
  display: flex;
  margin-bottom: 24px;
  align-items: baseline;
}

.meta {
  flex: 0 0 130px;
  color: var(--text-secondary);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}

.details {
  flex: 1;
}

.title {
  font-weight: 700;
  display: block;
  margin-bottom: 6px;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

a.title:hover {
  color: var(--accent);
}

.desc {
  color: var(--text-secondary);
  font-size: 13.5px;
  line-height: 1.5;
}
</style>
