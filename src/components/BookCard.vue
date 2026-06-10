<template>
  <article class="book-card" :class="{ 'in-library': inLibrary }" @click="inLibrary ? openDetail() : null">

    <!-- Capa -->
    <div class="card-cover">
      <img v-if="book.image" :src="book.image" :alt="`Capa de ${book.title}`" loading="lazy" />
      <div v-else class="cover-placeholder">
        <span>📖</span>
        <small>{{ book.title }}</small>
      </div>
      <span v-if="book.status" class="status-chip" :class="statusClass">{{ statusLabel }}</span>
    </div>

    <!-- Corpo -->
    <div class="card-body">
      <div class="card-meta">
        <span v-if="book.category" class="book-category">{{ book.category }}</span>
        <span v-if="book.year" class="book-year">{{ book.year }}</span>
      </div>
      <h3 class="card-title">{{ book.title }}</h3>
      <p class="card-author">{{ book.author || 'Autor desconhecido' }}</p>

      <div v-if="book.rating" class="card-stars">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= book.rating }">★</span>
      </div>
      <p v-if="book.comment" class="card-comment">"{{ book.comment }}"</p>

      <div class="card-actions">
        <slot name="actions">
          <button
            class="btn"
            :class="inLibrary ? 'btn-ghost' : 'btn-primary'"
            @click.stop="$emit('add', book)"
            :disabled="inLibrary"
          >
            {{ inLibrary ? '✓ Na biblioteca' : '+ Adicionar' }}
          </button>
        </slot>
      </div>
    </div>

    <!-- Hint de clique (biblioteca) -->
    <div v-if="inLibrary" class="card-hint">clique para abrir</div>
  </article>

  <!-- ── Modal de detalhes ──────────────────────────────────────────── -->
  <teleport to="body">
    <transition name="detail-modal">
      <div v-if="detailOpen" class="detail-overlay" @click.self="closeDetail">
        <div class="detail-modal">

          <!-- Header -->
          <div class="detail-header">
            <div class="detail-book-info">
              <div class="detail-cover-wrap">
                <img v-if="book.image" :src="book.image" :alt="book.title" class="detail-cover" />
                <div v-else class="detail-cover-placeholder">📖</div>
              </div>
              <div class="detail-meta">
                <span v-if="book.category" class="detail-category">{{ book.category }}</span>
                <h2 class="detail-title">{{ book.title }}</h2>
                <p class="detail-author">{{ book.author || 'Autor desconhecido' }}</p>
                <p v-if="book.year" class="detail-year">{{ book.year }}</p>
              </div>
            </div>
            <button class="detail-close" @click="closeDetail" aria-label="Fechar">✕</button>
          </div>

          <!-- Corpo -->
          <div class="detail-body">

            <!-- Status -->
            <div class="detail-field">
              <label class="detail-label">Status de leitura</label>
              <div class="status-pills">
                <button
                  v-for="s in statuses" :key="s.value"
                  class="pill" :class="{ active: form.status === s.value }"
                  @click="form.status = s.value"
                >{{ s.icon }} {{ s.label }}</button>
              </div>
            </div>

            <!-- Nota -->
            <div class="detail-field">
              <label class="detail-label">Minha nota</label>
              <div class="stars-row">
                <button
                  v-for="i in 5" :key="i"
                  class="star-pick" :class="{ filled: i <= form.rating }"
                  @click="form.rating = form.rating === i ? 0 : i"
                >★</button>
                <span v-if="form.rating" class="rating-hint">{{ ratingLabels[form.rating] }}</span>
              </div>
            </div>

            <!-- Bloco de notas -->
            <div class="detail-field detail-field-grow">
              <label class="detail-label">📝 Bloco de notas</label>
              <textarea
                v-model="form.comentario"
                class="input detail-textarea"
                placeholder="Suas impressões, citações favoritas, reflexões, personagens marcantes…"
              ></textarea>
            </div>

          </div>

          <!-- Footer -->
          <div class="detail-footer">
            <button class="btn btn-danger" @click="$emit('delete', book)">🗑 Remover livro</button>
            <div class="footer-right">
              <button class="btn btn-ghost" @click="closeDetail">Descartar</button>
              <button class="btn btn-primary" @click="save" :disabled="saving">
                {{ saving ? 'Salvando…' : '✓ Salvar' }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  book:      { type: Object,  required: true },
  inLibrary: { type: Boolean, default: false }
})

const emit = defineEmits(['add', 'save', 'delete'])

const detailOpen = ref(false)
const saving     = ref(false)
const form       = ref({ status: 'Quero ler', rating: 0, comentario: '' })

watch(() => props.book, b => {
  form.value = {
    status:     b.status  || 'Quero ler',
    rating:     b.rating  || 0,
    comentario: b.comment || ''
  }
}, { immediate: true })

function openDetail() {
  // Reseta form com dados atuais do livro
  form.value = {
    status:     props.book.status  || 'Quero ler',
    rating:     props.book.rating  || 0,
    comentario: props.book.comment || ''
  }
  detailOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeDetail() {
  detailOpen.value = false
  document.body.style.overflow = ''
}

async function save() {
  saving.value = true
  emit('save', {
    id:         props.book.id,
    status:     form.value.status,
    nota:       form.value.rating,
    comentario: form.value.comentario
  })
  saving.value = false
  closeDetail()
}

const statuses = [
  { value: 'Quero ler',  icon: '🔖', label: 'Quero ler' },
  { value: 'Lendo',      icon: '📖', label: 'Lendo' },
  { value: 'Finalizado', icon: '✅', label: 'Finalizado' },
  { value: 'Abandonado', icon: '🚫', label: 'Abandonado' }
]

const ratingLabels = { 1: 'Não gostei', 2: 'Regular', 3: 'Bom', 4: 'Muito bom', 5: 'Excelente' }

const statusMap = {
  'Quero ler':  { label: 'Quero ler',  cls: 'badge-want' },
  'Lendo':      { label: 'Lendo',      cls: 'badge-reading' },
  'Finalizado': { label: 'Finalizado', cls: 'badge-done' },
  'Abandonado': { label: 'Abandonado', cls: 'badge-abandoned' }
}

const statusLabel = computed(() => statusMap[props.book.status]?.label ?? props.book.status)
const statusClass = computed(() => statusMap[props.book.status]?.cls ?? '')
</script>

<style scoped>
/* ── Card base ───────────────────────────────────────────────────────────── */
.book-card {
  display: flex;
  flex-direction: column;
  background: var(--paper-warm);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform .2s var(--ease), box-shadow .2s var(--ease), border-color .2s;
  box-shadow: var(--shadow-card);
  position: relative;
}
.in-library {
  cursor: pointer;
}
.in-library:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--ink);
}
.book-card:not(.in-library):hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
  border-color: var(--ink-muted);
}

/* hint */
.card-hint {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  text-align: center;
  font-size: .7rem;
  font-family: var(--font-mono);
  letter-spacing: .06em;
  color: var(--paper);
  background: var(--ink);
  padding: 4px;
  opacity: 0;
  transition: opacity .2s;
}
.in-library:hover .card-hint { opacity: 1; }

/* ── Capa ────────────────────────────────────────────────────────────────── */
.card-cover {
  position: relative;
  aspect-ratio: 2/3;
  background: var(--paper-deep);
  overflow: hidden;
}
.card-cover img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .35s var(--ease);
}
.book-card:hover .card-cover img { transform: scale(1.04); }

.cover-placeholder {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: var(--gap-sm); padding: var(--gap-md);
  text-align: center; color: var(--ink-muted);
}
.cover-placeholder span  { font-size: 2.5rem; opacity: .4; }
.cover-placeholder small { font-size: .75rem; font-family: var(--font-display); font-style: italic; }

.status-chip {
  position: absolute; top: var(--gap-sm); left: var(--gap-sm);
  padding: 2px 10px; border-radius: 100px;
  font-size: .7rem; font-weight: 600; letter-spacing: .04em;
  font-family: var(--font-mono);
  background: var(--paper); border: 1px solid currentColor;
}

/* ── Corpo ───────────────────────────────────────────────────────────────── */
.card-body {
  padding: var(--gap-md);
  display: flex; flex-direction: column;
  gap: var(--gap-xs); flex: 1;
}
.card-meta {
  display: flex; align-items: center; gap: var(--gap-sm);
  font-size: .7rem; font-family: var(--font-mono);
  color: var(--ink-muted); text-transform: uppercase; letter-spacing: .06em;
}
.card-title {
  font-family: var(--font-display); font-size: 1rem; font-weight: 700;
  color: var(--ink); line-height: 1.3; margin-top: 2px;
  display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden;
}
.card-author { font-size: .8125rem; color: var(--ink-muted); font-style: italic; }
.card-stars  { display: flex; gap: 1px; margin-top: 4px; }
.star        { font-size: .9rem; color: var(--paper-deep); }
.star.filled { color: var(--gold); }
.card-comment {
  font-size: .8125rem; color: var(--ink-soft); font-style: italic;
  line-height: 1.5; margin-top: 4px;
  display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden;
}
.card-actions {
  margin-top: auto; padding-top: var(--gap-md);
  display: flex; gap: var(--gap-sm); flex-wrap: wrap;
}
.card-actions .btn {
  flex: 1; justify-content: center;
  font-size: .8125rem; padding: 8px 12px;
}
.card-actions .btn:disabled { opacity: .6; cursor: default; transform: none !important; }

/* ══ MODAL DE DETALHES ══════════════════════════════════════════════════════ */
.detail-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(26,20,16,.65);
  backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: var(--gap-lg);
}

.detail-modal {
  background: var(--paper);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-lg);
  width: 100%; max-width: 620px;
  max-height: 90vh;
  display: flex; flex-direction: column;
  box-shadow: var(--shadow-modal);
  overflow: hidden;
}

/* ── Header do modal ─────────────────────────────────────────────────────── */
.detail-header {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: var(--gap-lg);
  padding: var(--gap-lg);
  border-bottom: 1.5px solid var(--paper-deep);
  background: var(--paper-warm);
  flex-shrink: 0;
}
.detail-book-info { display: flex; align-items: flex-start; gap: var(--gap-lg); }

.detail-cover-wrap {
  flex-shrink: 0;
  width: 72px; height: 100px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--paper-deep);
  box-shadow: 3px 3px 12px rgba(26,20,16,.15);
}
.detail-cover { width: 100%; height: 100%; object-fit: cover; }
.detail-cover-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  background: var(--paper-deep); font-size: 2rem;
}

.detail-category {
  font-family: var(--font-mono); font-size: .7rem;
  text-transform: uppercase; letter-spacing: .08em;
  color: var(--accent); display: block; margin-bottom: 4px;
}
.detail-title {
  font-family: var(--font-display); font-size: 1.3rem;
  font-weight: 900; color: var(--ink); line-height: 1.2;
  margin-bottom: 4px;
}
.detail-author { font-size: .9rem; color: var(--ink-muted); font-style: italic; }
.detail-year   { font-size: .8rem; color: var(--ink-muted); font-family: var(--font-mono); margin-top: 4px; }

.detail-close {
  flex-shrink: 0; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  border: 1.5px solid var(--paper-deep); border-radius: var(--radius-sm);
  color: var(--ink-muted); font-size: .875rem;
  transition: all .15s; background: var(--paper);
}
.detail-close:hover { color: var(--ink); border-color: var(--ink); }

/* ── Corpo do modal ──────────────────────────────────────────────────────── */
.detail-body {
  padding: var(--gap-lg);
  display: flex; flex-direction: column; gap: var(--gap-lg);
  overflow-y: auto; flex: 1;
}

.detail-field { display: flex; flex-direction: column; gap: 8px; }
.detail-field-grow { flex: 1; }

.detail-label {
  font-size: .75rem; font-family: var(--font-mono);
  font-weight: 600; letter-spacing: .08em;
  text-transform: uppercase; color: var(--ink-muted);
}

.status-pills { display: flex; flex-wrap: wrap; gap: 6px; }
.pill {
  padding: 6px 14px; border: 1.5px solid var(--paper-deep);
  border-radius: 100px; font-size: .8125rem; font-weight: 500;
  color: var(--ink-soft); background: var(--paper-warm);
  transition: all .15s; white-space: nowrap;
}
.pill:hover  { border-color: var(--ink-muted); color: var(--ink); }
.pill.active { border-color: var(--ink); background: var(--ink); color: var(--paper); }

.stars-row { display: flex; align-items: center; gap: 4px; }
.star-pick {
  font-size: 1.75rem; color: var(--paper-deep);
  transition: color .15s, transform .1s; line-height: 1;
}
.star-pick:hover  { color: var(--gold); transform: scale(1.2); }
.star-pick.filled { color: var(--gold); }
.rating-hint { font-size: .8rem; color: var(--ink-muted); font-style: italic; margin-left: 8px; }

.detail-textarea {
  flex: 1; resize: none;
  min-height: 140px;
  font-size: .9375rem;
  line-height: 1.7;
}

/* ── Footer do modal ─────────────────────────────────────────────────────── */
.detail-footer {
  display: flex; align-items: center;
  justify-content: space-between; gap: var(--gap-sm);
  padding: var(--gap-md) var(--gap-lg);
  border-top: 1.5px solid var(--paper-deep);
  background: var(--paper-warm);
  flex-shrink: 0;
}
.footer-right { display: flex; gap: var(--gap-sm); }

/* ── Transição do modal ──────────────────────────────────────────────────── */
.detail-modal-enter-active {
  transition: opacity .25s var(--ease), transform .25s var(--ease);
}
.detail-modal-leave-active {
  transition: opacity .18s, transform .18s;
}
.detail-modal-enter-from {
  opacity: 0;
}
.detail-modal-leave-to {
  opacity: 0;
}
.detail-modal-enter-from .detail-modal {
  transform: scale(.94) translateY(16px);
}
.detail-modal-leave-to .detail-modal {
  transform: scale(.96) translateY(8px);
}

/* ── Mobile ──────────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .detail-overlay { padding: 0; align-items: flex-end; }
  .detail-modal {
    max-width: 100%; border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    max-height: 92vh;
  }
  .detail-modal-enter-from .detail-modal { transform: translateY(40px); }
}
</style>
