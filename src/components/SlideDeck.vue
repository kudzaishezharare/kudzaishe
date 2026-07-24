<template>
  <section
    class="slide-deck"
    tabindex="0"
    :aria-label="`${deck.title} slide viewer`"
    @keydown="onKeydown"
    @touchstart.passive="startSwipe"
    @touchend.passive="endSwipe"
  >
    <header class="deck-header">
      <div>
        <h4>{{ deck.title }}</h4>
        <span>{{ deck.meta }}</span>
      </div>
      <a :href="deck.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
    </header>

    <div class="slide-stage">
      <button type="button" class="slide-arrow previous" aria-label="Previous page" :disabled="currentIndex === 0" @click="previous">←</button>
      <img :src="currentPage" :alt="`${deck.title}, page ${currentIndex + 1}`">
      <button type="button" class="slide-arrow next" aria-label="Next page" :disabled="currentIndex === deck.pages.length - 1" @click="next">→</button>
    </div>

    <footer class="deck-controls">
      <span>Page {{ currentIndex + 1 }} / {{ deck.pages.length }}</span>
      <input
        v-model.number="pageNumber"
        type="range"
        min="1"
        :max="deck.pages.length"
        :aria-label="`Page ${currentIndex + 1} of ${deck.pages.length}`"
      >
      <div class="page-actions">
        <button type="button" :disabled="currentIndex === 0" @click="previous">Previous</button>
        <button type="button" :disabled="currentIndex === deck.pages.length - 1" @click="next">Next</button>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'SlideDeck',
  props: {
    deck: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      touchStartX: null
    }
  },
  computed: {
    currentPage() {
      return this.deck.pages[this.currentIndex]
    },
    pageNumber: {
      get() {
        return this.currentIndex + 1
      },
      set(value) {
        this.currentIndex = Math.min(Math.max(Number(value) - 1, 0), this.deck.pages.length - 1)
      }
    }
  },
  watch: {
    deck() {
      this.currentIndex = 0
    }
  },
  methods: {
    onKeydown(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        this.previous()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        this.next()
      }
    },
    previous() {
      if (this.currentIndex > 0) this.currentIndex -= 1
    },
    next() {
      if (this.currentIndex < this.deck.pages.length - 1) this.currentIndex += 1
    },
    startSwipe(event) {
      this.touchStartX = event.changedTouches[0]?.clientX ?? null
    },
    endSwipe(event) {
      if (this.touchStartX === null) return
      const endX = event.changedTouches[0]?.clientX ?? this.touchStartX
      const distance = endX - this.touchStartX
      if (Math.abs(distance) > 45) distance < 0 ? this.next() : this.previous()
      this.touchStartX = null
    }
  }
}
</script>

<style scoped>
.slide-deck {
  grid-column: 1 / -1;
  min-width: 0;
  border: 1px solid var(--border);
  background: #111;
  outline: none;
}

.slide-deck:focus-visible {
  border-color: var(--accent);
}

.deck-header,
.deck-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 16px;
}

.deck-header {
  border-bottom: 1px solid var(--border);
}

.deck-header h4 {
  margin: 0 0 3px;
  color: var(--text-primary);
  font-size: 13px;
}

.deck-header span,
.deck-controls span {
  color: var(--text-secondary);
  font-size: 11px;
}

.deck-header a {
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 11px;
  text-decoration: none;
}

.slide-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 320px;
  background: #e9e4da;
  overflow: hidden;
}

.slide-stage img {
  display: block;
  width: 100%;
  max-height: 680px;
  object-fit: contain;
}

.slide-arrow {
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 44px;
  height: 44px;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: rgba(20, 20, 20, 0.78);
  color: #fff;
  font: inherit;
  cursor: pointer;
}

.slide-arrow.previous {
  left: 14px;
}

.slide-arrow.next {
  right: 14px;
}

.slide-arrow:disabled,
.deck-controls button:disabled {
  cursor: default;
  opacity: 0.28;
}

.deck-controls {
  border-top: 1px solid var(--border);
}

.deck-controls input {
  min-width: 120px;
  flex: 1;
  accent-color: var(--accent);
}

.page-actions {
  display: flex;
  gap: 8px;
}

.page-actions button {
  padding: 7px 10px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-primary);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}

.page-actions button:not(:disabled):hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 600px) {
  .deck-header,
  .deck-controls {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .slide-stage {
    min-height: 180px;
  }

  .slide-arrow {
    width: 38px;
    height: 38px;
  }

  .deck-controls input {
    flex-basis: 100%;
    order: 3;
  }
}
</style>
