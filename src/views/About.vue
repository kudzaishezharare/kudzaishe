<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item active">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/blogs" class="nav-item">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <!-- HEADER -->
      <header class="about-header">
        <img src="/kudzigeorge.jpg" alt="Kudzaishe Zharare" class="avatar">
        <div class="header-text">
          <h1>Kudzaishe George Zharare</h1>
          <div class="bio">
            Software Engineer. Systems Architect. MIT Alum.<br>
          </div>
        </div>
      </header>

      <!-- EDUCATION -->
      <section>
        <h2>Education</h2>
        <div class="item">
          <div class="meta">MIT</div>
          <div class="details">
            <span class="title">B.S. Computer Science & Math</span>
            <div class="desc">Research at MIT Media Lab & CSAIL.</div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <div class="contact-section">
        <h2>Contact</h2>
        <div class="contact-links">
          <a href="mailto:kudzi@alum.mit.edu" class="link">Email</a>
          <a href="https://linkedin.com/in/kudzigeorge" class="link">LinkedIn</a>
          <a href="https://github.com/kudzigeorge" class="link">GitHub</a>
          <a href="/resume.pdf" class="link">Resume.pdf</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'About'
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

.about-header {
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
}

.desc {
  color: var(--text-secondary);
  font-size: 13.5px;
  line-height: 1.5;
}

.contact-section {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.contact-links {
  display: flex;
  gap: 24px;
  font-size: 13px;
}

.link {
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: all 0.2s ease;
  padding-bottom: 1px;
}

.link:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
</style>
