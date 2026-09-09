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
        <div class="meta">2025 — Present</div>
        <div class="details">
          <span class="title">Founder and Software Engineer @ Poza</span>
          <div class="desc">Led product discovery through 56 merchant and payments-stakeholder interviews, translating findings into requirements, user journeys, interface prototypes, and technical architecture. Built Flutter/Dart mobile apps, web interfaces, and TypeScript services on AWS. Implemented document verification with PaddleOCR and facial matching, Rekognition liveness checks, Airwallex payment and card integrations, a PostgreSQL wallet ledger with deposit matching and reconciliation, and Alpaca brokerage onboarding, funding, and orders in sandbox. Product development and deployment verification remain in progress.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">Apr 2024 - 2025</div>
        <div class="details">
          <a href="https://getcleva.com" class="title" target="_blank" rel="noopener noreferrer">Lead Engineer @ Cleva (YC W24)</a>
          <div class="desc">Led KYC automation using Veriff, OCR, and AWS Rekognition, replacing waits of 2 days to 3 weeks with decisions in under a minute for eligible completed submissions. Built Nigerian NIN verification, face-based duplicate detection, and a JSON Logic engine for approximately 100 evolving compliance rules. The infrastructure supported onboarding as Cleva grew beyond a million users.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2021 — 2023</div>
        <div class="details">
          <a href="https://techcrunch.com/2022/05/26/zimbabwe-flexid-algorand-funding-decentralized-identity/" class="title" target="_blank" rel="noopener noreferrer">CTO, later Co-Founder @ FlexID</a>
          <div class="desc">Built a self-sovereign identity wallet across Android, web, and WhatsApp using Algorand, verifiable credentials, zero-knowledge proofs, and MPC key management. FlexID was named a World Economic Forum Technology Pioneer.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2019 — 2021</div>
        <div class="details">
          <a href="https://mutapa.co" class="title" target="_blank" rel="noopener noreferrer">Founder @ Motapa, trading as Mutapa</a>
          <div class="desc">Led a five-person delivery team for CBZ's contracted 200-merchant programme, implementing iVeri payments across education, retail, healthcare, and public institutions. Coordinated bank liaison, merchant training, and support continuing through 2022. Subsequent work included 3D Secure, Cybersource Decision Manager, EcoCash, and Zimswitch gateway integrations. Built Mutapa Marketplace, acquired by CBZ Holdings and now Zikimall.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2019 — 2020</div>
        <div class="details">
          <span class="title">Country Lead Engineer @ The World Bank</span>
          <div class="desc">Built Zimbabwe's DRIVER crash-reporting app and national dashboards, then led rollout with police, ambulance services, and the Ministry of Health.</div>
        </div>
      </div>
      <p><a class="title" href="/kudzaishe-zharare-cv.pdf">Download résumé / CV (PDF)</a></p>
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
