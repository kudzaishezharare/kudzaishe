<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <SiteNav />

    <!-- MAIN CONTENT -->
    <main class="content" id="main-content" tabindex="-1">
      <h1>Selected Work</h1>
      <p class="project-intro">Engineering work across identity, payments, AI, and applications. Each case study describes my contribution, the system, and its delivery stage.</p>

      <div v-for="project in projects" :key="project.id" class="item">
        <div class="meta">{{ project.category }}</div>
        <div class="details">
          <router-link class="project-title" :to="{ path: '/projects', query: { project: project.id } }">
            {{ project.title }}
            <span aria-hidden="true">↗</span>
          </router-link>
          <div class="desc">{{ project.summary }}</div>
          <span v-if="project.stage" class="project-stage">{{ project.stage }}</span>
        </div>
      </div>
    </main>

    <ProjectModal :project="selectedProject" @close="closeProject" />
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { projects } from '../data/projects'

export default {
  name: 'Projects',
  components: { ProjectModal, SiteNav },
  data() {
    return { projects }
  },
  computed: {
    selectedProject() {
      return this.projects.find(project => project.id === this.$route.query.project) || null
    }
  },
  methods: {
    openProject(projectId) {
      this.$router.push({ query: { ...this.$route.query, project: projectId } })
    },
    closeProject() {
      const query = { ...this.$route.query }
      delete query.project
      this.$router.push({ query })
    }
  }
}
</script>

<style scoped>
.project-stage { display: inline-block; margin-top: 10px; color: var(--accent); font-size: 0.875rem; }




.content h1 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.project-intro {
  margin: -18px 0 40px;
  color: var(--text-secondary);
  line-height: 1.65;
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
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
}

.details {
  flex: 1;
}

.project-title {
  padding: 0;
  border: 0;
  background: transparent;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  color: var(--text-primary);
  font: inherit;
  font-weight: 700;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
}

.project-title span {
  color: var(--accent);
  font-size: 12px;
}

.project-title:hover,
.project-title:focus-visible {
  color: var(--accent);
  outline: 2px solid var(--accent);
  outline-offset: 5px;
}

.desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}
</style>

