<template>
  <div class="page-container">
    <!-- NAVIGATION -->
    <nav class="vertical-nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/projects" class="nav-item active">Projects</router-link>
      <router-link to="/blogs" class="nav-item">Blogs</router-link>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1>Selected Work</h1>
      <p class="project-intro">Open a project for the story, implementation notes, links, and original media.</p>

      <div v-for="project in projects" :key="project.id" class="item">
        <div class="meta">{{ project.category }}</div>
        <div class="details">
          <button class="project-title" type="button" @click="openProject(project.id)">
            {{ project.title }}
            <span aria-hidden="true">↗</span>
          </button>
          <div class="desc">{{ project.summary }}</div>
        </div>
      </div>
    </main>

    <ProjectModal :project="selectedProject" @close="closeProject" />
  </div>
</template>

<script>
import ProjectModal from '../components/ProjectModal.vue'
import { projects } from '../data/projects'

export default {
  name: 'Projects',
  components: { ProjectModal },
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
  font-size: 13px;
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
  outline: none;
}

.desc {
  color: var(--text-secondary);
  font-size: 13.5px;
  line-height: 1.5;
}
</style>
