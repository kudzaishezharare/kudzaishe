<template>
  <div class="page-container">
    <SiteNav />
    <main class="content home-content" id="main-content" tabindex="-1">
      <header class="landing-header">
        <img src="/kudzigeorge-avatar.jpg" alt="Kudzaishe Zharare" class="home-avatar" width="144" height="144" fetchpriority="high">
        <div class="header-text">
          <h1>Kudzaishe George Zharare</h1>
          <p class="location">Cape Town, South Africa</p>
          <p class="availability">Open to full-time roles and contract projects</p>
        </div>
      </header>
      <section class="home-intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Software &amp; AI engineer.</h2>
        <p class="lead">I build backend systems, AI integrations, and applications across web and mobile. My experience spans payments, digital identity, compliance automation, and the infrastructure that connects them.</p>
        <p class="credentials">MIT graduate · Lead engineering experience at Cleva · Former CTO at FlexID</p>
        <div class="action-row">
          <a class="button button-primary" :href="roleEnquiry">Discuss a role</a>
          <a class="button button-secondary" :href="projectEnquiry">Discuss a project</a>
        </div>
        <div class="resource-row">
          <a href="/kudzaishe-zharare-cv.pdf" download>Download CV <span class="file-note">(PDF)</span></a>
          <router-link to="/experience">View experience</router-link>
          <a href="https://github.com/kudzaishezharare" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
      <section class="home-section" aria-labelledby="work-title">
        <div class="section-heading">
          <h2 id="work-title">Selected engineering work</h2>
          <router-link to="/projects">All work</router-link>
        </div>
        <router-link v-for="project in featured" :key="project.id" :to="{ path: '/projects', query: { project: project.id } }" class="featured-work">
          <span class="work-category">{{ project.category }}</span>
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.summary }}</p>
            <span class="read-case">View case study</span>
          </div>
        </router-link>
      </section>
      <section class="home-section" aria-labelledby="engagement-title">
        <h2 id="engagement-title">Work with me</h2>
        <div class="engagement-grid">
          <div>
            <h3>Join your engineering team</h3>
            <p>Senior software, backend, and applied AI roles with hands-on ownership of systems and delivery.</p>
            <a :href="roleEnquiry">Discuss a role</a>
          </div>
          <div>
            <h3>Deliver a defined project</h3>
            <p>Backend integrations, AI features, identity workflows, and architecture reviews with an agreed scope.</p>
            <router-link to="/work">See project engagements</router-link>
          </div>
        </div>
      </section>
      <section class="home-section writing-note" aria-labelledby="writing-title">
        <h2 id="writing-title">Writing</h2>
        <a href="https://poza.co/insights/agentic-payments-proving-permission/" target="_blank" rel="noopener noreferrer">AI agents can spend money. The hard part is proving they had permission.</a>
        <p>How I think about delegated actions, user approval, and payment infrastructure.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import { roleEnquiry, projectEnquiry } from '../data/work'
import { projects } from '../data/projects'
const featured = ['cleva', 'mutapa-technologies', 'poza'].map(id => projects.find(project => project.id === id))
</script>

<style scoped>
.landing-header { display: flex; align-items: center; gap: 28px; padding: 0 0 28px; margin: 0 0 32px; border-bottom: 1px solid var(--border); }
.home-avatar { flex: 0 0 144px; width: 144px; height: 144px; object-fit: cover; border-radius: 50%; border: 2px solid var(--accent); }
.header-text h1 { font-size: 1.25rem; line-height: 1.5; letter-spacing: -0.025em; margin: 0 0 8px; }
.location { margin: 0; font-size: 0.875rem; color: var(--text-secondary); }
.availability { margin: 12px 0 0; font-size: 0.875rem; color: var(--text-primary); }
.home-intro h2 { text-transform: none; letter-spacing: -0.04em; font-size: clamp(1.8rem, 3.2vw, 2.6rem); line-height: 1.2; color: var(--text-primary); margin: 0 0 20px; }
.lead { font-size: 1.0625rem; line-height: 1.8; color: var(--text-secondary); margin: 0 0 20px; }
.credentials { color: var(--text-primary); font-size: 0.875rem; line-height: 1.8; margin: 0 0 28px; }
.home-section { margin-top: 56px; }
.section-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.section-heading > a { font-size: 0.875rem; flex-shrink: 0; }
.featured-work { display: grid; grid-template-columns: 130px minmax(0, 1fr); gap: 20px; padding: 24px 0; border-top: 1px solid var(--border); color: inherit; text-decoration: none; }
.featured-work:last-child { border-bottom: 1px solid var(--border); }
.work-category { color: var(--accent); font-size: 0.875rem; }
.featured-work h3, .engagement-grid h3 { font-size: 1rem; margin: 0 0 10px; line-height: 1.6; }
.featured-work p, .engagement-grid p, .writing-note p { color: var(--text-secondary); font-size: 1rem; margin: 0 0 12px; line-height: 1.75; }
.read-case { color: var(--accent); font-size: 0.875rem; text-decoration: underline; text-underline-offset: 4px; }
.featured-work:hover h3 { color: var(--accent); }
.engagement-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
.engagement-grid > div { border-top: 1px solid var(--border); padding-top: 24px; }
.engagement-grid a { font-size: 0.875rem; }
.writing-note > a { color: var(--text-primary); display: inline-block; margin-bottom: 12px; line-height: 1.7; }
@media (max-width: 600px) {
  .landing-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .featured-work { grid-template-columns: 1fr; gap: 8px; }
  .engagement-grid { grid-template-columns: 1fr; }
  .section-heading { align-items: flex-start; }
}
</style>
