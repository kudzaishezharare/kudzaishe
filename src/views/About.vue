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
            Founder and engineer · Cape Town<br>
          </div>
        </div>
      </header>

      <section>
        <h2>About</h2>
        <p class="statement">
          I am a Zimbabwean founder and engineer based in Cape Town. Since
          graduating from MIT in 2019, I have built e-commerce, payments, identity, public
          infrastructure, and financial-compliance systems across African
          markets.
        </p>
        <p class="statement">
          At Cleva, I led the move from manual KYC to automated verification,
          building infrastructure used as the platform grew beyond a million
          users. At Motapa, I led payment-integration delivery through CBZ for
          organisations ranging from universities and hospitals to retailers
          and public institutions. Those projects shape how I build Poza today:
          clear authorization, reliable integrations, and useful recovery when
          a workflow needs human judgment.
        </p>
        <p class="statement">
          My work starts with a recurring question: what must change when
          systems designed around complete maps, reliable connectivity,
          standardized institutions, and globally trusted identities meet a
          different operating reality? I build from those local constraints,
          while designing products and protocols that can operate globally.
        </p>
      </section>

      <!-- EDUCATION -->
      <section>
        <h2>Education</h2>
        <div class="item">
          <div class="meta">MIT</div>
          <div class="details">
            <span class="title">B.S. Computer Science & Math</span>
            <div class="desc">Undergraduate research in MIT CSAIL's Computational Fabrication Group. President of the MIT African Students Association and inaugural chair of the Africa Learning Circle.</div>
          </div>
        </div>
      </section>

      <section>
        <h2>Selected Recognition</h2>
        <div class="item">
          <div class="meta">2022</div>
          <div class="details">
            <span class="title">World Economic Forum Technology Pioneer</span>
            <div class="desc">FlexID was selected among the Forum's global cohort of early-stage technology companies.</div>
          </div>
        </div>
        <div class="item">
          <div class="meta">2019</div>
          <div class="details">
            <a href="https://news.mit.edu/2019/mit-african-students-association-1003" class="title" target="_blank" rel="noopener noreferrer">MIT Golden Beaver Award</a>
            <div class="desc">The MIT African Students Association received the award for organizational excellence during my presidency.</div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <div class="contact-section">
        <h2>Contact</h2>
        <div class="contact-links">
          <a href="mailto:kudzi@alum.mit.edu" class="link">Email</a>
          <a href="https://linkedin.com/in/kudzigeorge" class="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kudzaishezharare" class="link" target="_blank" rel="noopener noreferrer">GitHub</a>
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

.statement {
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0 0 18px;
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
