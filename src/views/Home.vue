<template>
  <div class="portfolio-page">
    <nav class="vertical-nav" aria-label="Portfolio navigation">
      <router-link to="/#intro" class="nav-item">Overview</router-link>
      <router-link to="/#experience" class="nav-item">Experience</router-link>
      <router-link to="/#skills-heading" class="nav-item">Skills</router-link>
      <router-link to="/blogs" class="nav-item">Writing</router-link>
    </nav>

    <main class="content portfolio-content">
      <section id="intro" class="intro" aria-labelledby="name">
        <header class="identity">
          <img src="/kudzigeorge-avatar.jpg" alt="Kudzaishe Zharare" width="144" height="144" class="portrait">
          <div>
            <h1 id="name">Kudzaishe Zharare</h1>
            <p class="positioning">Full-stack software engineer</p>
            <p class="education">MIT · Computer Science and Mathematics</p>
          </div>
        </header>
        <p class="pitch">I build identity and payment systems, from user-facing applications to the infrastructure behind them.</p>
        <ul class="results" aria-label="Selected results">
          <li><strong>Faster onboarding</strong><span>Cut identity verification from days to under a minute for eligible submissions at Cleva</span></li>
          <li><strong>User-controlled identity</strong><span>Built credential wallets with selective disclosure and zero-knowledge proofs at FlexID</span></li>
          <li><strong>Product delivery</strong><span>Led a 5-person payments team and built Mutapa Marketplace, later acquired by CBZ Holdings</span></li>
        </ul>
        <div class="actions">
          <a class="primary-action" href="/kudzaishe-zharare-cv.pdf">Download resume</a>
          <a class="contact-action" href="mailto:kudzi@alum.mit.edu">Work with me</a>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <details v-for="job in experience" :key="job.company" class="job">
          <summary>
            <span class="job-heading"><strong>{{ job.company }}</strong><span class="date">{{ job.period }}</span></span>
            <span class="role">{{ job.role }}</span>
            <span class="job-result">{{ job.summary }}</span>
            <span class="expand-label">View work</span>
          </summary>
          <ul class="work-bullets"><li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li></ul>
        </details>
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <dl class="capabilities">
          <div v-for="group in skillGroups" :key="group.title">
            <dt>{{ group.title }}</dt><dd>{{ group.detail }}</dd>
          </div>
        </dl>
      </section>

      <details id="projects" class="more-work" :open="showPortfolio">
        <summary>More projects and portfolio</summary>
        <Projects :embedded="true" />
      </details>
    </main>
  </div>
</template>

<script>
import Projects from './Projects.vue'
import { experience } from '../data/experience'
import { skillGroups } from '../data/skills'

export default {
  name: 'Home',
  components: { Projects },
  data: () => ({ experience, skillGroups }),
  computed: {
    showPortfolio() {
      return ['#projects', '#cbz-organisations'].includes(this.$route.hash) || Boolean(this.$route.query.project)
    }
  }
}
</script>

<style scoped>
.portfolio-page { min-height: 100vh; }
.vertical-nav { position: fixed; inset: 0 auto 0 0; width: 200px; padding: 80px 24px 24px; background: var(--bg-color); border-right: 1px solid var(--border); display: flex; flex-direction: column; gap: 16px; }
.nav-item { padding: 8px 12px; color: var(--text-secondary); text-decoration: none; font-size: 14px; border-radius: 4px; }
.nav-item:hover, .nav-item:focus-visible { color: var(--text-primary); background: rgba(164,120,90,.1); }
.portfolio-content { max-width: 760px; padding: 24px; }
.portfolio-content section, .more-work, #skills-heading { scroll-margin-top: 90px; }
.identity { gap: 24px; padding: 0; margin: 0 0 24px; border: 0; }
.portrait { width: 104px; height: 104px; flex: 0 0 auto; border-radius: 50%; object-fit: cover; }
h1 { margin: 0 0 4px; font-size: clamp(23px, 3vw, 30px); line-height: 1.25; letter-spacing: -.04em; }
.positioning { margin: 0; font-size: 18px; color: var(--text-primary); }
.education { margin: 8px 0 0; font-size: 12px; color: var(--text-secondary); }
.pitch { font-size: 18px; line-height: 1.6; max-width: 580px; margin: 0 0 24px; }
.results { list-style: none; margin: 0; padding: 0; }
.results li { display: grid; grid-template-columns: 160px minmax(0, 1fr); gap: 20px; padding: 16px 0; border-top: 1px solid var(--border); }
.results strong { font-size: 14px; }
.results span { font-size: 16px; line-height: 1.55; color: var(--text-secondary); }
.actions { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; margin-top: 28px; }
.actions a { font-size: 14px; text-decoration: none; }
.primary-action { padding: 12px 18px; background: var(--text-primary); color: var(--bg-color); border-radius: 4px; font-weight: 700; }
.contact-action { color: var(--text-primary); padding: 10px 0; border-bottom: 1px solid var(--accent); }
h2 { color: var(--text-secondary); font-size: 14px; letter-spacing: .08em; margin: 0 0 20px; }
.job { border-top: 1px solid var(--border); }
.job:last-child { border-bottom: 1px solid var(--border); }
.job summary { cursor: pointer; padding: 18px 0; list-style: none; }
.job summary::-webkit-details-marker { display: none; }
.job-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; }
.job-heading strong { font-size: 16px; }
.date { flex-shrink: 0; color: var(--text-secondary); font-size: 12px; }
.role { display: block; margin-top: 4px; color: var(--text-secondary); font-size: 14px; }
.job-result { display: block; margin-top: 8px; font-size: 16px; }
.expand-label { display: block; margin-top: 8px; font-size: 12px; color: var(--text-secondary); }
.expand-label::after { content: ' +'; }
.job[open] .expand-label::after { content: ' −'; }
.work-bullets { padding-left: 20px; margin: 0 0 24px; font-size: 16px; color: var(--text-secondary); }
.work-bullets li + li { margin-top: 12px; }
.capabilities { margin: 0; }
.capabilities div + div { margin-top: 18px; }
.capabilities dt { font-size: 14px; font-weight: 700; margin-bottom: 5px; }
.capabilities dd { margin: 0; font-size: 16px; color: var(--text-secondary); }
.more-work { border-top: 1px solid var(--border); padding-top: 20px; }
.more-work > summary { cursor: pointer; font-size: 16px; }
a:focus-visible, summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 5px; }
@media (max-width: 600px) {
  .identity { gap: 16px; align-items: center; }
  .portrait { width: 72px; height: 72px; }
  .positioning { font-size: 16px; }
  .results li { grid-template-columns: 1fr; gap: 6px; }
  .job-heading { flex-direction: column; gap: 3px; }
  .pitch { font-size: 17px; }
}
</style>
