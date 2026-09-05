<template>
  <div class="page-container">
    <SiteNav />
    <main class="content work-content" id="main-content" tabindex="-1">
      <p class="eyebrow">Roles &amp; contract projects</p>
      <h1>Work with me</h1>
      <p class="page-lead">I work across backend engineering, applied AI, and product integrations. Based in Cape Town, I collaborate with teams remotely and locally.</p>
      <section class="role-section" aria-labelledby="roles-title">
        <h2 id="roles-title">Engineering roles</h2>
        <p>I am open to senior software, backend, and applied AI engineering roles. I bring hands-on implementation, system design, and experience leading engineering across identity, payments, and compliance.</p>
        <div class="action-row">
          <a class="button button-primary" :href="roleEnquiry">Discuss a role</a>
          <a class="button button-secondary" href="/kudzaishe-zharare-cv.pdf" download>Download CV (PDF)</a>
        </div>
        <p class="enquiry-note">Include the role, company, work location, compensation range, and hiring timeline.</p>
      </section>
      <section aria-labelledby="projects-title">
        <h2 id="projects-title">Contract engagements</h2>
        <article v-for="service in services" :key="service.title" class="service">
          <h3>{{ service.title }}</h3>
          <p>{{ service.problem }}</p>
          <p><strong>Possible scope:</strong> {{ service.deliverables }}</p>
          <p class="service-tools">{{ service.tools }}</p>
          <router-link :to="{ path: '/projects', query: { project: service.evidence } }">{{ service.evidenceLabel }}</router-link>
        </article>
      </section>
      <section class="engagement-process" aria-labelledby="process-title">
        <h2 id="process-title">From brief to handover</h2>
        <ol>
          <li><strong>Share the problem.</strong> Send your current system, expected outcome, budget range, and timeline.</li>
          <li><strong>Agree the scope.</strong> Define deliverables, dependencies, acceptance criteria, fees, and milestones before implementation.</li>
          <li><strong>Build and hand over.</strong> Review progress against the agreed scope, with code and documentation for your team.</li>
        </ol>
        <a class="button button-primary" :href="projectEnquiry">Discuss a project</a>
        <p class="enquiry-note">Prefer a direct email? <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></p>
      </section>
    </main>
  </div>
</template>

<script setup>
import SiteNav from '../components/SiteNav.vue'
import { contactEmail, projectEnquiry, roleEnquiry, services } from '../data/work'
</script>

<style scoped>
.work-content h1 { font-size: 2rem; margin: 0 0 20px; letter-spacing: -0.04em; line-height: 1.3; }
.eyebrow { color: var(--accent); font-size: 0.875rem; margin: 0 0 12px; }
.page-lead { color: var(--text-secondary); margin-bottom: 40px; line-height: 1.8; }
.role-section { padding: 28px; border: 1px solid var(--border); border-left: 2px solid var(--accent); }
.role-section h2 { margin-top: 0; }
.role-section > p, .service p { color: var(--text-secondary); line-height: 1.8; }
.service { border-top: 1px solid var(--border); padding: 28px 0; }
.service h3 { font-size: 1.125rem; margin: 0 0 12px; line-height: 1.6; }
.service p { margin: 0 0 12px; }
.service strong { color: var(--text-primary); font-weight: 500; }
.service .service-tools, .service > a { font-size: 0.875rem; }
.engagement-process { border-top: 1px solid var(--border); padding-top: 24px; }
.engagement-process ol { padding-left: 24px; margin-bottom: 28px; color: var(--text-secondary); }
.engagement-process li { padding-left: 8px; margin-bottom: 20px; }
.engagement-process strong { color: var(--text-primary); }
@media (max-width: 600px) { .role-section { padding: 20px; } }
</style>
