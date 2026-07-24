<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item">Projects</router-link>
      <router-link to="/blogs" class="nav-item active">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1>Writing</h1>
      <p class="intro">
        Essays on African financial infrastructure, digital identity, and the
        computation embedded in local knowledge systems.
        <a href="https://medium.com/@kudzigeorge">Medium profile</a>
      </p>

      <h2>On this site</h2>

      <div class="item">
        <div class="meta">2023</div>
        <div class="details">
          <router-link to="/flexid" class="title">FlexID: Protocol for Insurable Identity</router-link>
          <div class="desc">A technical note on pricing trust, insuring verifiable claims, and creating economic accountability around digital credentials.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2020 / 2025</div>
        <div class="details">
          <router-link to="/article" class="title">Recursive Architecture</router-link>
          <div class="desc">A 2025 adaptation of my 2020 essay on fractal geometry, recursion, and self-similar organization in Ba-Ila settlement architecture.</div>
        </div>
      </div>

      <h2>Published on Medium</h2>

      <div class="item">
        <div class="meta">2022-03-19</div>
        <div class="details">
          <a href="https://medium.com/flexid/a-business-trip-with-flexid-ssid-7aff5407fb28" class="title">A Business Trip with FlexID SSID</a>
          <div class="desc">A concrete journey through how a user-controlled digital wallet could handle reservations, identity proofs, access, and credential exchange.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2022-03-13</div>
        <div class="details">
          <a href="https://medium.com/@kudzigeorge/hop-on-spaceship-and-join-the-banking-4-1-movement-4f88ca2e74f1" class="title">Banking 4.1</a>
          <div class="desc">Why African financial infrastructure should be interoperable, developer-friendly, and designed for broader participation rather than branch-era assumptions.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2022-01-30</div>
        <div class="details">
          <a href="https://medium.com/@kudzigeorge/for-centuries-technology-and-finance-have-lived-in-simpatic-hand-in-glove-relationship-2018b71b09c0" class="title">This Decade Will Be Radically Different in African Fintech</a>
          <div class="desc">An early argument for embedded payments, open APIs, and locally responsive technology choices, written while building Mutapa.</div>
        </div>
      </div>

      <div class="item">
        <div class="meta">2020-01-14</div>
        <div class="details">
          <a href="https://medium.com/mitafricans/applied-mathematics-in-pre-colonial-african-settlements-4067ceb048cf" class="title">Applied Mathematics in Pre-Colonial African Settlements</a>
          <div class="desc">Fractal geometry, recursion, and self-similar social organization in Southern African settlement architecture.</div>
        </div>
      </div>

      <a href="https://medium.com/@kudzigeorge" class="profile-link">View Medium profile →</a>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Blogs'
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

.intro {
  color: var(--text-secondary);
  line-height: 1.65;
  margin: -18px 0 36px;
}

.intro a,
.desc a {
  color: var(--accent);
}

.content h2 {
  margin: 48px 0 28px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
  text-decoration: none;
  transition: color 0.2s ease;
}

a.title:hover {
  color: var(--accent);
}

.desc {
  color: var(--text-secondary);
  font-size: 13.5px;
  line-height: 1.5;
}

.profile-link {
  display: inline-block;
  margin-top: 16px;
  color: var(--accent);
  text-decoration: none;
}
</style>
