<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <SiteNav />

    <!-- MAIN CONTENT -->
    <main class="content" id="main-content" tabindex="-1">
      <h1>Engineering experience</h1>
      <p class="experience-intro">Hands-on engineering and technical leadership across payments, digital identity, and public infrastructure.</p>
      <div class="resource-row experience-actions">
        <a href="/kudzaishe-zharare-cv.pdf" download>Download CV (PDF)</a>
        <router-link to="/work">Discuss a role or project</router-link>
      </div>

      <div class="item">
        <div class="meta">2025 to Present</div>
        <div class="details">
          <span class="title">Founder @ Poza</span>
          <div class="desc">Building a money app and payment authorization layer for African users and AI agents. Work includes backend services, web and mobile applications, and approval boundaries for agent-proposed actions. Product and pilot development are ongoing.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2023 to 2025</div>
        <div class="details">
          <a href="https://getcleva.com" class="title" target="_blank" rel="noopener noreferrer">Lead Engineer @ Cleva (YC W24)</a>
          <div class="desc">Led security, identity, and compliance engineering for a USD banking platform supporting 500,000+ users. Built automated KYC, liveness, transaction monitoring, resilient onboarding, and internal mobile testing.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2021 to 2023</div>
        <div class="details">
          <a href="https://techcrunch.com/2022/05/26/zimbabwe-flexid-algorand-funding-decentralized-identity/" class="title" target="_blank" rel="noopener noreferrer">CTO, later Co-Founder @ FlexID</a>
          <div class="desc">Built a self-sovereign identity wallet across Android, web, and WhatsApp using Algorand, verifiable credentials, zero-knowledge proofs, and MPC key management. FlexID was named a World Economic Forum Technology Pioneer.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2019 to 2021</div>
        <div class="details">
          <a href="https://mutapa.co" class="title" target="_blank" rel="noopener noreferrer">Founder @ Motapa, trading as Mutapa</a>
          <div class="desc">Grew an artisan network into an e-commerce and payments platform, delivered integrations for 200 major Zimbabwean merchants and institutions, and sold Mutapa Marketplace to CBZ Holdings. It continues as Zikimall.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2019 to 2020</div>
        <div class="details">
          <span class="title">Country Lead Engineer @ The World Bank</span>
          <div class="desc">Built Zimbabwe's DRIVER crash-reporting app and national dashboards, then led rollout with police, ambulance services, and the Ministry of Health.</div>
        </div>
      </div>
      <section class="technical-focus" aria-labelledby="technical-focus-title">
        <h2 id="technical-focus-title">Technical focus</h2>
        <dl>
          <div><dt>Backend &amp; infrastructure</dt><dd>TypeScript, Node.js, Python, Django, AWS, PostgreSQL, DynamoDB, Redis</dd></div>
          <div><dt>Applications</dt><dd>React, React Native, Android, web and mobile onboarding</dd></div>
          <div><dt>AI &amp; systems</dt><dd>LLM integrations, structured tools, authorization, API design, observability</dd></div>
          <div><dt>Domain experience</dt><dd>Payments, KYC, identity verification, compliance rules, provider integrations</dd></div>
        </dl>
      </section>
    </main>
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav.vue'
export default {
  name: 'Experience',
  components: { SiteNav }
}
</script>

<style scoped>
.experience-intro { color: var(--text-secondary); margin: -20px 0 24px; line-height: 1.8; }
.experience-actions { margin-bottom: 40px; }
.technical-focus { margin-top: 56px; }
.technical-focus dl > div { padding: 16px 0; border-top: 1px solid var(--border); }
.technical-focus dt { color: var(--text-primary); margin-bottom: 6px; font-weight: 700; }
.technical-focus dd { color: var(--text-secondary); margin: 0; line-height: 1.8; }




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
  font-size: 0.875rem;
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
  font-size: 1rem;
  line-height: 1.5;
}
</style>

