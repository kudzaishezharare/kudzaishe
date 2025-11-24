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
      <h1>Projects</h1>

      <div class="item">
        <div class="meta">Open Source</div>
        <div class="details">
          <a href="https://github.com/stalela/bantu-grammar-engine" class="title">Bantu Grammar Engine</a>
          <div class="desc">Python library for validating Shona text against machine-readable grammar rules using JSON-Logic. Morphological analysis and linguistic validation for Bantu languages.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Protocol</div>
        <div class="details">
          <a href="https://github.com/google-agentic-commerce/AP2" class="title">Agent Payments Protocol (AP2)</a>
          <div class="desc">Enabling agent-to-agent commerce through automated payment flows. Google-led specification for AI agents to conduct financial transactions securely.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Extension</div>
        <div class="details">
          <a href="https://github.com/stalela/a2a-x402" class="title">A2A x402 Extension</a>
          <div class="desc">Cryptocurrency payments extension for the A2A protocol. Enables agents to monetize services through on-chain payments, reviving HTTP 402 for decentralized agent ecosystems.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Geospatial</div>
        <div class="details">
          <a href="https://github.com/kudzigeorge/gosper-open-location-code" class="title">Gosper Open Location Code</a>
          <div class="desc">Pure-Python hierarchical geocoder using Gosper curves. Encodes lat/lng coordinates into compact deterministic strings with seven-way branching pattern. Includes code shortening, recovery, and OLC comparison.</div>
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
