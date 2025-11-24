<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item active">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/blogs" class="nav-item">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1>Experience</h1>

      <div class="item">
        <div class="meta">2024 — Present</div>
        <div class="details">
          <span class="title">Senior Backend Engineer @ Cleva (YC W24)</span>
          <div class="desc">Architecting fault-tolerant payment systems on AWS for 500k+ users. Ensuring audit-grade observability.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2021 — 2023</div>
        <div class="details">
          <span class="title">CTO / Lead Engineer @ FlexID</span>
          <div class="desc">Co-founded a decentralized identity platform (WEF Tech Pioneer). Acquired by CBZ Bank. Built on Algorand & Go.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2019 — 2021</div>
        <div class="details">
          <span class="title">Software Engineer @ The World Bank</span>
          <div class="desc">Led the DRIVER project to digitize national road safety data in Zimbabwe.</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Experience'
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
  margin-bottom: 32px;
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
}

.desc {
  color: var(--text-secondary);
  font-size: 13.5px;
  line-height: 1.5;
}
</style>
