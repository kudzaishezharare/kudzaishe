<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item active">Projects</router-link>
      <router-link to="/blogs" class="nav-item">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1>Selected Work</h1>

      <div class="item">
        <div class="meta">Company</div>
        <div class="details">
          <a href="https://mutapa.co" class="title">Mutapa</a>
          <div class="desc">Built from a distributed artisan network into an e-commerce and payments platform. Mutapa Marketplace was acquired by CBZ Holdings and became Zikimall; the Mutapa brand now curates art, objects, and apparel from Cape Town.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Education</div>
        <div class="details">
          <a href="https://github.com/kudzaishezharare/web-games" class="title">Lalela Web Games</a>
          <div class="desc">A Phaser-based browser platform adapting 202 GCompris educational activities across mathematics, literacy, programming, science, music, accessibility, and strategy. Includes a shared game framework, touch input, local progress, offline support, tests, and CI.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Open Source</div>
        <div class="details">
          <span class="title">Bantu Grammar Engine</span>
          <div class="desc">A Python engine that represents Shona grammar as machine-readable JSON-Logic rules, combining morphological analysis with deterministic validation for AI-generated and human-written text.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Protocol</div>
        <div class="details">
          <a href="https://github.com/google-agentic-commerce/AP2" class="title">Agent Payments Protocol (AP2)</a>
          <div class="desc">Contributor to Google's open protocol for secure AI-agent payments, including work to represent African payment methods and mobile-money flows.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Geospatial</div>
        <div class="details">
          <span class="title">Gosper Open Location Code</span>
          <div class="desc">An experimental offline geocoder that encodes coordinates into compact, hierarchical location codes for places without standardized street addresses or complete digital maps.</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Projects'
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

h2 {
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
  margin-top: 50px;
  margin-bottom: 20px;
  color: var(--text-secondary);
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
