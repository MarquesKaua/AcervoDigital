<template>
  <div class="search-page">
    <div class="container">
      <!-- Header da página -->
      <div class="page-header">
        <h1 class="page-title">Explorar Livros</h1>
        <p class="page-sub">Busque por título, autor ou assunto</p>
      </div>

      <!-- Barra de busca -->
      <SearchBar
        v-model="query"
        placeholder="Ex: Dom Casmurro, George Orwell, ficção científica…"
        @search="fetchBooks"
        @clear="results = []"
      />

      <!-- Estado: carregando -->
      <div v-if="loading" class="spinner"></div>

      <!-- Estado: erro -->
      <div v-else-if="error" class="error-msg">
        <span>⚠️</span> {{ error }}
      </div>

      <!-- Estado: resultados -->
      <div v-else-if="results.length > 0">
        <p class="results-count">
          <span>{{ results.length }} resultado{{ results.length > 1 ? 's' : '' }}</span>
          para "<em>{{ lastQuery }}</em>"
        </p>
        <div class="books-grid">
          <BookCard
            v-for="book in results"
            :key="book.id"
            :book="book"
            :inLibrary="libraryIds.has(book.id)"
            @add="addBook"
          />
        </div>
      </div>

      <!-- Estado: sem resultados -->
      <div v-else-if="searched" class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Nenhum resultado</h3>
        <p>Tente termos mais simples ou verifique a ortografia.</p>
      </div>

      <!-- Estado: inicial -->
      <div v-else class="initial-state">
        <div class="suggestions">
          <p class="suggestions-label">Sugestões para começar:</p>
          <div class="suggestions-chips">
            <button
              v-for="s in suggestions"
              :key="s"
              class="chip"
              @click="query = s; fetchBooks()"
            >{{ s }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import BookCard  from '../components/BookCard.vue'
import { db } from '../firebase.js'
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore'

const showToast = inject('showToast')

// ── Estado ─────────────────────────────────────────────────────────────────
const query     = ref('')
const results   = ref([])
const loading   = ref(false)
const error     = ref('')
const searched  = ref(false)
const lastQuery = ref('')
const libraryIds = ref(new Set())

const suggestions = [
  'Dom Casmurro', '1984', 'Harry Potter', 'Sapiens',
  'O Alquimista', 'Clarice Lispector', 'Fiódor Dostoiévski'
]

// ── Busca na Open Library API ───────────────────────────────────────────────
async function fetchBooks() {
  const q = query.value.trim()
  if (!q) return

  loading.value  = true
  error.value    = ''
  searched.value = false

  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=20&fields=key,title,author_name,cover_i,first_publish_year,subject,publisher`
    )
    if (!res.ok) throw new Error('Erro na requisição à API')

    const data = await res.json()
    lastQuery.value = q
    searched.value  = true

    results.value = (data.docs || []).map(item => {
      const coverId = item.cover_i
      return {
        id:          item.key,                          // ex: /works/OL45883W
        title:       item.title || 'Título desconhecido',
        author:      (item.author_name || []).join(', '),
        image:       coverId
                       ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                       : '',
        description: '',
        year:        item.first_publish_year?.toString() || '',
        category:    (item.subject || [])[0] || '',
        pages:       null,
        publisher:   (item.publisher || [])[0] || ''
      }
    })
  } catch (e) {
    error.value = 'Não foi possível buscar os livros. Verifique sua conexão.'
  } finally {
    loading.value = false
  }
}

// ── Carregar IDs da biblioteca ──────────────────────────────────────────────
async function loadLibraryIds() {
  try {
    const snap = await getDocs(collection(db, 'livros'))
    snap.forEach(doc => libraryIds.value.add(doc.data().openLibraryId))
  } catch (e) { /* Firebase não configurado */ }
}

// ── Adicionar ao Firebase ───────────────────────────────────────────────────
async function addBook(book) {
  if (libraryIds.value.has(book.id)) {
    showToast({ message: 'Este livro já está na sua biblioteca.', type: '' })
    return
  }
  try {
    await addDoc(collection(db, 'livros'), {
      openLibraryId: book.id,
      titulo:     book.title,
      autor:      book.author,
      capa:       book.image,
      descricao:  book.description,
      ano:        book.year,
      categoria:  book.category,
      status:     'Quero ler',
      nota:       0,
      comentario: '',
      adicionadoEm: serverTimestamp()
    })
    libraryIds.value.add(book.id)
    showToast({ message: `"${book.title}" adicionado à biblioteca!`, type: 'success' })
  } catch (e) {
    showToast({ message: 'Erro ao salvar. Verifique as configurações do Firebase.', type: 'error' })
  }
}

onMounted(loadLibraryIds)
</script>

<style scoped>
.search-page { padding: var(--gap-xl) 0 var(--gap-2xl); }

.page-header {
  margin-bottom: var(--gap-xl);
}
.page-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--ink);
  margin-bottom: var(--gap-xs);
}
.page-sub {
  color: var(--ink-muted);
}

.results-count {
  font-size: .875rem;
  color: var(--ink-muted);
  margin: var(--gap-xl) 0 var(--gap-lg);
  font-family: var(--font-mono);
}
.results-count em { color: var(--ink); font-style: italic; }
.results-count span { color: var(--ink); font-weight: 600; }

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--gap-lg);
}

.error-msg {
  display: flex;
  align-items: center;
  gap: var(--gap-sm);
  color: var(--accent);
  margin-top: var(--gap-xl);
  padding: var(--gap-md) var(--gap-lg);
  background: var(--accent-dim);
  border-radius: var(--radius-sm);
  border: 1px solid var(--accent-dim);
}

/* ── Estado inicial ──────────────────────────────────────────────────────── */
.initial-state {
  margin-top: var(--gap-2xl);
}
.suggestions-label {
  font-size: .875rem;
  color: var(--ink-muted);
  margin-bottom: var(--gap-md);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: .06em;
}
.suggestions-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-sm);
}
.chip {
  padding: 8px 16px;
  background: var(--paper-warm);
  border: 1.5px solid var(--paper-deep);
  border-radius: 100px;
  font-size: .875rem;
  color: var(--ink-soft);
  transition: all .2s;
}
.chip:hover {
  border-color: var(--ink);
  color: var(--ink);
  background: var(--paper-deep);
}

@media (max-width: 480px) {
  .books-grid { grid-template-columns: repeat(2, 1fr); gap: var(--gap-md); }
}
</style>
