<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="project" class="project-modal" role="dialog" aria-modal="true" :aria-labelledby="`project-${project.id}`" @click.self="$emit('close')">
        <article class="project-panel">
          <header class="project-header">
            <div>
              <span class="project-kicker">{{ project.category }} · {{ project.period }}</span>
              <h2 :id="`project-${project.id}`">{{ project.title }}</h2>
            </div>
            <button ref="closeButton" class="close-button" type="button" aria-label="Close project" @click="$emit('close')">×</button>
          </header>

          <div class="project-body">
            <p class="project-brief">{{ project.brief }}</p>

            <section v-for="section in project.sections" :key="section.title" class="project-section">
              <h3>{{ section.title }}</h3>
              <p>{{ section.body }}</p>
            </section>

            <section v-if="project.links.length" class="project-section">
              <h3>Links</h3>
              <div class="project-links">
                <a v-for="link in project.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
              </div>
            </section>

            <section v-if="project.media.length" class="project-section">
              <h3>Media</h3>
              <div class="media-grid">
                <template v-for="item in project.media" :key="item.src || item.title">
                  <SlideDeck v-if="item.type === 'slides'" :deck="item" />
                  <figure v-else class="media-item" :class="`media-${item.type}`">
                  <a v-if="item.type === 'image'" :href="item.src" target="_blank" rel="noopener noreferrer">
                    <img :src="item.src" :alt="item.alt || item.title">
                  </a>
                  <video v-else-if="item.type === 'video'" controls preload="metadata">
                    <source :src="item.src">
                  </video>
                  <a v-else class="document-link" :href="item.src" target="_blank" rel="noopener noreferrer">
                    <span class="document-type">{{ item.type.toUpperCase() }}</span>
                    <span>{{ item.title }}</span>
                    <small>{{ item.meta || 'Open document' }}</small>
                  </a>
                  <figcaption v-if="item.type === 'image' || item.type === 'video'">{{ item.title }}</figcaption>
                  </figure>
                </template>
              </div>
            </section>
          </div>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import SlideDeck from './SlideDeck.vue'

export default {
  name: 'ProjectModal',
  components: { SlideDeck },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  mounted() {
    document.addEventListener('keydown', this.onKeydown)
    if (this.project) this.lockScroll()
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
    this.unlockScroll()
  },
  watch: {
    project(value) {
      if (value) {
        this.lockScroll()
        this.$nextTick(() => this.$refs.closeButton?.focus())
      } else {
        this.unlockScroll()
      }
    }
  },
  methods: {
    onKeydown(event) {
      if (event.key === 'Escape' && this.project) this.$emit('close')
    },
    lockScroll() {
      document.body.style.overflow = 'hidden'
    },
    unlockScroll() {
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.project-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  padding: 32px;
  overflow-y: auto;
  background: rgba(8, 8, 8, 0.86);
  backdrop-filter: blur(8px);
}

.project-panel {
  width: min(920px, 100%);
  margin: 0 auto;
  border: 1px solid var(--border);
  background: var(--bg-color);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
}

.project-header {
  position: sticky;
  top: -32px;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  padding: 28px 32px;
  border-bottom: 1px solid var(--border);
  background: rgba(28, 28, 28, 0.96);
  backdrop-filter: blur(10px);
}

.project-kicker {
  display: block;
  margin-bottom: 8px;
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-header h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: 24px;
  letter-spacing: -0.04em;
  text-transform: none;
}

.close-button {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-primary);
  font: inherit;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.close-button:hover,
.close-button:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
  outline: none;
}

.project-body {
  padding: 36px 32px 48px;
}

.project-brief {
  max-width: 720px;
  margin: 0 0 44px;
  color: #dcd0c0;
  font-size: 17px;
  line-height: 1.75;
}

.project-section {
  margin: 0 0 36px;
}

.project-section h3 {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-section p {
  max-width: 740px;
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.75;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-links a,
.document-link {
  color: var(--text-primary);
  text-decoration: none;
}

.project-links a {
  padding: 9px 12px;
  border: 1px solid var(--border);
}

.project-links a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.media-item {
  min-width: 0;
  margin: 0;
  border: 1px solid var(--border);
  background: #151515;
}

.media-image {
  grid-column: 1 / -1;
}

.media-item img,
.media-item video {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
}

.media-item figcaption {
  padding: 12px 14px;
  color: var(--text-secondary);
  font-size: 12px;
}

.document-link {
  min-height: 150px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
}

.document-link:hover {
  color: var(--accent);
}

.document-type {
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 0.1em;
}

.document-link small {
  color: var(--text-secondary);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 160ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .project-modal {
    padding: 0;
  }

  .project-panel {
    min-height: 100vh;
    border: 0;
  }

  .project-header {
    top: 0;
    padding: 20px;
  }

  .project-header h2 {
    font-size: 20px;
  }

  .project-body {
    padding: 28px 20px 44px;
  }

  .project-brief {
    font-size: 15px;
  }

  .media-grid {
    grid-template-columns: 1fr;
  }
}
</style>
