<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
        <div class="modal" role="dialog" aria-modal="true" :aria-label="`Editar ${book?.titulo}`">
          <!-- Header -->
          <div class="modal-header">
            <div class="modal-book-info">
              <img v-if="book?.capa" :src="book.capa" :alt="book.titulo" class="modal-cover" />
              <div>
                <h2 class="modal-title">{{ book?.titulo }}</h2>
                <p class="modal-author">{{ book?.autor }}</p>
              </div>
            </div>
            <button class="modal-close" @click="$emit('update:modelValue', false)" aria-label="Fechar">✕</button>
          </div>

          <!-- Form -->
          <div class="modal-body">
            <!-- Status -->
            <div class="field">
              <label class="field-label">Status de leitura</label>
              <div class="status-grid">
                <button
                  v-for="s in statuses"
                  :key="s.value"
                  class="status-btn"
                  :class="{ active: form.status === s.value }"
                  @click="form.status = s.value"
                >
                  <span>{{ s.icon }}</span>
                  {{ s.label }}
                </button>
              </div>
            </div>

            <!-- Nota -->
            <div class="field">
              <label class="field-label">Minha nota</label>
              <div class="stars-picker">
                <button
                  v-for="i in 5"
                  :key="i"
                  class="star-btn"
                  :class="{ filled: i <= form.rating }"
                  @click="form.rating = form.rating === i ? 0 : i"
                  :aria-label="`${i} estrela${i > 1 ? 's' : ''}`"
                >★</button>
                <span class="rating-text" v-if="form.rating">{{ ratingLabels[form.rating] }}</span>
              </div>
            </div>

            <!-- Comentário -->
            <div class="field">
              <label class="field-label">Comentário pessoal</label>
              <textarea
                v-model="form.comentario"
                class="input"
                rows="4"
                placeholder="O que você achou deste livro? Suas impressões, favoritos, reflexões…"
              ></textarea>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button class="btn btn-ghost" @click="$emit('update:modelValue', false)">Cancelar</button>
            <button class="btn btn-primary" @click="save" :disabled="saving">
              {{ saving ? 'Salvando…' : 'Salvar alterações' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  book: Object
})

const emit = defineEmits(['update:modelValue', 'save'])

const saving = ref(false)

const statuses = [
  { value: 'Quero ler',  icon: '🔖', label: 'Quero ler' },
  { value: 'Lendo',      icon: '📖', label: 'Lendo' },
  { value: 'Finalizado', icon: '✅', label: 'Finalizado' },
  { value: 'Abandonado', icon: '🚫', label: 'Abandonado' }
]

const ratingLabels = {
  1: 'Não gostei',
  2: 'Regular',
  3: 'Bom',
  4: 'Muito bom',
  5: 'Excelente'
}

const form = ref({ status: 'Quero ler', rating: 0, comentario: '' })

watch(() => props.book, b => {
  if (b) {
    form.value = {
      status:     b.status     || 'Quero ler',
      rating:     b.nota       || 0,
      comentario: b.comentario || ''
    }
  }
}, { immediate: true })

async function save() {
  saving.value = true
  await emit('save', {
    status:     form.value.status,
    nota:       form.value.rating,
    comentario: form.value.comentario
  })
  saving.value = false
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,20,16,.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-lg);
  z-index: 1000;
}

.modal {
  background: var(--paper);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 520px;
  box-shadow: var(--shadow-modal);
  overflow: hidden;
}

/* ── Header ──────────────────────────────────────────────────────────────── */
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-md);
  padding: var(--gap-lg);
  border-bottom: 1px solid var(--paper-deep);
}
.modal-book-info {
  display: flex;
  align-items: flex-start;
  gap: var(--gap-md);
}
.modal-cover {
  width: 52px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  border: 1px solid var(--paper-deep);
}
.modal-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
}
.modal-author {
  font-size: .85rem;
  color: var(--ink-muted);
  font-style: italic;
  margin-top: 4px;
}
.modal-close {
  color: var(--ink-muted);
  font-size: 1rem;
  padding: 4px;
  flex-shrink: 0;
  transition: color .15s;
}
.modal-close:hover { color: var(--ink); }

/* ── Body ────────────────────────────────────────────────────────────────── */
.modal-body {
  padding: var(--gap-lg);
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
}

.field { display: flex; flex-direction: column; gap: var(--gap-sm); }

.field-label {
  font-size: .8125rem;
  font-weight: 600;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--ink-muted);
  font-family: var(--font-mono);
}

.status-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-sm);
}
.status-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-sm);
  background: var(--paper-warm);
  color: var(--ink-soft);
  font-size: .875rem;
  font-weight: 500;
  transition: all .15s;
}
.status-btn:hover { border-color: var(--ink-muted); color: var(--ink); }
.status-btn.active {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--paper);
}

.stars-picker {
  display: flex;
  align-items: center;
  gap: 4px;
}
.star-btn {
  font-size: 1.75rem;
  color: var(--paper-deep);
  transition: color .15s, transform .1s;
  line-height: 1;
}
.star-btn:hover { color: var(--gold); transform: scale(1.15); }
.star-btn.filled { color: var(--gold); }

.rating-text {
  font-size: .8125rem;
  color: var(--ink-muted);
  font-style: italic;
  margin-left: var(--gap-sm);
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-sm);
  padding: var(--gap-md) var(--gap-lg);
  border-top: 1px solid var(--paper-deep);
  background: var(--paper-warm);
}

/* ── Transição ───────────────────────────────────────────────────────────── */
.modal-enter-active { transition: opacity .2s, transform .2s var(--ease); }
.modal-leave-active { transition: opacity .15s; }
.modal-enter-from   { opacity: 0; }
.modal-leave-to     { opacity: 0; }
.modal-enter-from .modal { transform: translateY(20px) scale(.97); }
</style>
