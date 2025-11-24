<template>
  <div class="landing-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item active">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/blogs" class="nav-item">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <!-- HEADER -->
      <header class="landing-header">
        <img src="/kudzigeorge.jpg" alt="Kudzaishe Zharare" class="avatar">

        <div class="header-text">
          <h1>Kudzaishe George Zharare</h1>
          <div class="bio">
            Software Engineer. Systems Architect. MIT Alum.<br>
          </div>
        </div>
      </header>

      <div class="welcome-text">
        <p>
          Systems architect specializing in distributed systems, digital identity, and AI agent protocols.
          Currently building payment infrastructure at Cleva, previously co-founded FlexID (acquired by CBZ Bank).
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.landing-container {
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

.landing-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 60px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 30px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent);
  background-color: var(--border);
}

.header-text h1 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.bio {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.5;
}

.welcome-text {
  max-width: 500px;
}

.welcome-text p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}
</style>
