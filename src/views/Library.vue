<template>
  <div class="library-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <div>
          <h1 class="page-title">Minha Biblioteca</h1>
          <p class="page-sub">
            <span class="book-count">{{ filteredBooks.length }}</span>
            {{ filteredBooks.length === 1 ? 'livro' : 'livros' }}
            <template v-if="filteredBooks.length !== books.length"> de {{ books.length }} no total</template>
          </p>
        </div>
        <router-link to="/buscar" class="btn btn-primary">
          + Adicionar livros
        </router-link>
      </div>

      <!-- Controles: busca + filtros + ordenação -->
      <div class="controls">
        <div class="local-search">
          <span class="search-icon">🔍</span>
          <input
            class="input"
            v-model="localSearch"
            placeholder="Buscar na biblioteca…"
            autocomplete="off"
          />
        </div>

        <div class="filter-tabs">
          <button
            v-for="f in filters"
            :key="f.value"
            class="filter-tab"
            :class="{ active: activeFilter === f.value }"
            @click="activeFilter = f.value"
          >
            {{ f.label }}
            <span class="tab-count">{{ countByStatus(f.value) }}</span>
          </button>
        </div>

        <select v-model="sortBy" class="input sort-select">
          <option value="recent">Mais recentes</option>
          <option value="rating">Maior nota</option>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>
      </div>

      <!-- Estado: carregando -->
      <div v-if="loading" class="spinner"></div>

      <!-- Estado: biblioteca vazia -->
      <div v-else-if="books.length === 0" class="empty-state">
        <div class="empty-icon">📚</div>
        <h3>Sua biblioteca está vazia</h3>
        <p>Explore livros e adicione os que quiser ao seu acervo.</p>
        <router-link to="/buscar" class="btn btn-primary" style="margin-top: 16px;">
          Explorar livros
        </router-link>
      </div>

      <!-- Estado: sem resultados no filtro -->
      <div v-else-if="filteredBooks.length === 0" class="empty-state">
        <div class="empty-icon">🔎</div>
        <h3>Nenhum livro encontrado</h3>
        <p>Tente outro filtro ou termo de busca.</p>
      </div>

      <!-- Grid de livros -->
      <div v-else class="books-grid">
        <BookCard
          v-for="book in filteredBooks"
          :key="book.id"
          :book="{ ...book, title: book.titulo, author: book.autor, image: book.capa, year: book.ano, category: book.categoria, rating: book.nota, comment: book.comentario }"
          :inLibrary="true"
          @save="saveBook"
          @delete="confirmDelete"
        />
      </div>
    </div>

    <!-- Confirm delete -->
    <teleport to="body">
      <transition name="modal">
        <div v-if="deleteTarget" class="modal-overlay" @click.self="deleteTarget = null">
          <div class="confirm-modal">
            <h3>Remover livro</h3>
            <p>Tem certeza que deseja remover <strong>"{{ deleteTarget?.titulo }}"</strong> da sua biblioteca?</p>
            <div class="confirm-actions">
              <button class="btn btn-ghost" @click="deleteTarget = null">Cancelar</button>
              <button class="btn btn-danger" @click="deleteBook">Remover</button>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import BookCard from '../components/BookCard.vue'
import { db } from '../firebase.js'
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const showToast = inject('showToast')

const books        = ref([])
const loading      = ref(true)
const localSearch  = ref('')
const activeFilter = ref('all')
const sortBy       = ref('recent')
const deleteTarget = ref(null)

const filters = [
  { label: 'Todos',       value: 'all' },
  { label: 'Quero ler',   value: 'Quero ler' },
  { label: 'Lendo',       value: 'Lendo' },
  { label: 'Finalizados', value: 'Finalizado' },
  { label: 'Abandonados', value: 'Abandonado' }
]

// ── Firebase listener ──────────────────────────────────────────────────────
onMounted(() => {
  try {
    onSnapshot(collection(db, 'livros'), snap => {
      books.value   = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      loading.value = false
    })
  } catch (e) {
    loading.value = false
    showToast({ message: 'Configure o Firebase para usar a biblioteca.', type: 'error' })
  }
})

// ── Filtro + ordenação ─────────────────────────────────────────────────────
const filteredBooks = computed(() => {
  let list = [...books.value]

  if (activeFilter.value !== 'all') {
    list = list.filter(b => b.status === activeFilter.value)
  }

  const q = localSearch.value.toLowerCase().trim()
  if (q) {
    list = list.filter(b =>
      b.titulo?.toLowerCase().includes(q) ||
      b.autor?.toLowerCase().includes(q)
    )
  }

  switch (sortBy.value) {
    case 'rating': list.sort((a, b) => (b.nota || 0) - (a.nota || 0)); break
    case 'az':     list.sort((a, b) => a.titulo?.localeCompare(b.titulo)); break
    case 'za':     list.sort((a, b) => b.titulo?.localeCompare(a.titulo)); break
    default:
      list.sort((a, b) => (b.adicionadoEm?.seconds || 0) - (a.adicionadoEm?.seconds || 0))
  }

  return list
})

function countByStatus(status) {
  if (status === 'all') return books.value.length
  return books.value.filter(b => b.status === status).length
}

// ── Salvar (vem do card expandido) ────────────────────────────────────────
async function saveBook({ id, status, nota, comentario }) {
  try {
    await updateDoc(doc(db, 'livros', id), { status, nota, comentario })
    showToast({ message: 'Livro atualizado!', type: 'success' })
  } catch (e) {
    showToast({ message: 'Erro ao atualizar o livro.', type: 'error' })
  }
}

// ── Deletar ────────────────────────────────────────────────────────────────
function confirmDelete(book) {
  // book vem com title/author (formato do card), precisamos do id original
  deleteTarget.value = books.value.find(b => b.id === book.id) || book
}

async function deleteBook() {
  if (!deleteTarget.value) return
  const name = deleteTarget.value.titulo || deleteTarget.value.title
  try {
    await deleteDoc(doc(db, 'livros', deleteTarget.value.id))
    showToast({ message: `"${name}" removido da biblioteca.` })
  } catch (e) {
    showToast({ message: 'Erro ao remover o livro.', type: 'error' })
  } finally {
    deleteTarget.value = null
  }
}
</script>

<style scoped>
.library-page { padding: var(--gap-xl) 0 var(--gap-2xl); }

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-lg);
  margin-bottom: var(--gap-xl);
  flex-wrap: wrap;
}

.page-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--ink);
  margin-bottom: var(--gap-xs);
}
.page-sub   { color: var(--ink-muted); font-size: .9375rem; }
.book-count { font-family: var(--font-mono); font-weight: 600; color: var(--ink); font-size: 1.1rem; }

/* ── Controles ───────────────────────────────────────────────────────────── */
.controls {
  display: flex;
  gap: var(--gap-md);
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: var(--gap-xl);
}

.local-search {
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
}
.search-icon {
  position: absolute;
  left: 12px; top: 50%;
  transform: translateY(-50%);
  font-size: .9rem;
  pointer-events: none;
}
.local-search .input { padding-left: 38px; }

.filter-tabs { display: flex; gap: 4px; flex-wrap: wrap; }

.filter-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-sm);
  font-size: .8125rem;
  font-weight: 500;
  color: var(--ink-muted);
  background: var(--paper-warm);
  transition: all .15s;
}
.filter-tab:hover  { border-color: var(--ink-muted); color: var(--ink); }
.filter-tab.active { border-color: var(--ink); background: var(--ink); color: var(--paper); }

.tab-count { font-family: var(--font-mono); font-size: .7rem; opacity: .7; }
.filter-tab.active .tab-count { opacity: .8; }

.sort-select { width: auto; padding: 8px 14px; font-size: .875rem; cursor: pointer; }

/* ── Grid ────────────────────────────────────────────────────────────────── */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--gap-lg);
  align-items: start;
}

/* ── Confirm modal ───────────────────────────────────────────────────────── */
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

.confirm-modal {
  background: var(--paper);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-lg);
  padding: var(--gap-xl);
  max-width: 420px;
  width: 100%;
  box-shadow: var(--shadow-modal);
}
.confirm-modal h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: var(--gap-md);
}
.confirm-modal p {
  font-size: .9375rem;
  color: var(--ink-soft);
  line-height: 1.6;
  margin-bottom: var(--gap-xl);
}
.confirm-actions { display: flex; justify-content: flex-end; gap: var(--gap-sm); }

.modal-enter-active { transition: opacity .2s; }
.modal-leave-active { transition: opacity .15s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* ── Responsivo ──────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .page-header { align-items: flex-start; flex-direction: column; }
  .local-search { max-width: 100%; }
  .books-grid { grid-template-columns: repeat(2, 1fr); gap: var(--gap-md); }
}
</style>
