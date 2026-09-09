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
        <div class="avatar-wrap">
          <img
            src="/kudzigeorge-avatar.jpg"
            alt="Kudzaishe Zharare"
            class="avatar"
            width="144"
            height="144"
          >
        </div>

        <div class="header-text">
          <h1>Kudzaishe George Zharare</h1>
          <div class="bio">
            Founder and engineer
          </div>
        </div>
      </header>

      <div class="welcome-text">
        <p>
          I build financial software from product research and interface design
          through backend services and deployment. At Poza, I turned 56 merchant
          and payments-stakeholder interviews into product requirements, user
          journeys, and technical architecture, then built mobile and web
          experiences with TypeScript services on AWS.
        </p>
        <p>
          The work includes document verification, payment and card integrations
          with Airwallex, a PostgreSQL wallet ledger, and Alpaca brokerage
          integration in sandbox. Poza remains under active development. I am
          also designing how users can approve and limit financial actions by
          AI agents, explored in <a href="https://poza.co/insights/agentic-payments-proving-permission/" target="_blank" rel="noopener noreferrer">AI agents can spend money. The hard part is proving they had permission.</a>
        </p>
        <p>
          At Cleva (YC W24), I led KYC automation that replaced days of waiting
          with decisions in under a minute for eligible submissions. The
          verification infrastructure I built supported onboarding as Cleva
          grew beyond a million users.
        </p>
        <p>
          Through Motapa's CBZ programme, I led a five-person team delivering
          payment integrations for universities, retailers, healthcare providers,
          and public institutions. I also built Mutapa Marketplace, acquired by
          CBZ Holdings and now <a href="https://zikimall.com/" target="_blank" rel="noopener noreferrer">Zikimall</a>.
          Previously CTO and later Co-Founder of FlexID, I studied computer
          science and mathematics at MIT.
        </p>
        <router-link class="portfolio-link" to="/projects#cbz-organisations">Explore the work and organisations served</router-link>
        <div class="home-actions" aria-label="Work and résumé links">
          <a
            class="work-cta"
            href="mailto:kudzi@alum.mit.edu?subject=Work%20with%20Kudzaishe"
          >Work with me</a>
          <a class="resume-link" href="/kudzaishe-zharare-cv.pdf">Résumé / CV</a>
        </div>
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

.avatar-wrap {
  flex-shrink: 0;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent);
  background-color: var(--border);
}

.avatar {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.welcome-text a {
  color: var(--accent);
}

.welcome-text p + p { margin-top: 18px; }
.portfolio-link { display: inline-block; margin-top: 18px; font-size: 13px; }

.home-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
}

.home-actions a {
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.work-cta {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 8px 15px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  background: var(--accent);
  color: var(--bg-color) !important;
  transition: background 0.2s ease, color 0.2s ease;
}

.work-cta:hover,
.work-cta:focus-visible {
  background: transparent;
  color: var(--text-primary) !important;
}

.resume-link {
  padding-bottom: 2px;
  border-bottom: 1px solid var(--accent);
}

.home-actions a:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 3px;
}

@media (max-width: 420px) {
  .home-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }
}
</style>
