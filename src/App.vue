<template>
  <div id="app-root">
    <!-- Navbar -->
    <header class="navbar">
      <div class="container navbar-inner">
        <router-link to="/" class="navbar-logo">
          <span class="logo-icon">📚</span>
          <span class="logo-text">Acervo<em>Digital</em></span>
        </router-link>

        <nav class="navbar-nav">
          <router-link to="/"          class="nav-link">Início</router-link>
          <router-link to="/buscar"    class="nav-link">Explorar</router-link>
          <router-link to="/biblioteca" class="nav-link">
            Minha Biblioteca
            <span v-if="bookCount > 0" class="nav-badge">{{ bookCount }}</span>
          </router-link>
        </nav>

        <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="mobile-menu" :class="{ open: menuOpen }" @click="menuOpen = false">
        <router-link to="/"           class="nav-link">Início</router-link>
        <router-link to="/buscar"     class="nav-link">Explorar</router-link>
        <router-link to="/biblioteca" class="nav-link">Minha Biblioteca</router-link>
      </div>
    </header>

    <!-- Page content -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @toast="showToast" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <span>Acervo Digital — organize suas leituras</span>
        <span class="footer-sep">·</span>
        <span>Dados: <a href="https://developers.google.com/books" target="_blank" rel="noopener">Google Books API</a></span>
      </div>
    </footer>

    <!-- Toast -->
    <div class="toast-container">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="toast"
        :class="t.type"
      >{{ t.message }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted } from 'vue'
import { db } from './firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'

// ── Toast ──────────────────────────────────────────────────────────────────
const toasts = ref([])

function showToast({ message, type = '' }) {
  const id = Date.now()
  toasts.value.push({ id, message, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 3000)
}

provide('showToast', showToast)

// ── Contagem da biblioteca ─────────────────────────────────────────────────
const bookCount = ref(0)
const menuOpen  = ref(false)

onMounted(() => {
  try {
    onSnapshot(collection(db, 'livros'), snap => {
      bookCount.value = snap.size
    })
  } catch (e) {
    // Firebase não configurado ainda — ignora
  }
})
</script>

<style scoped>
/* ── Navbar ─────────────────────────────────────────────────────────────── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--paper);
  border-bottom: 1.5px solid var(--paper-deep);
  backdrop-filter: blur(8px);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ink);
}
.navbar-logo em {
  font-style: italic;
  color: var(--accent);
}
.logo-icon { font-size: 1.4rem; }

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--gap-lg);
}

.nav-link {
  font-size: .875rem;
  font-weight: 500;
  color: var(--ink-muted);
  letter-spacing: .02em;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: color .2s, border-color .2s;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: var(--ink);
  border-bottom-color: var(--accent);
}

.nav-badge {
  background: var(--accent);
  color: #fff;
  font-size: .7rem;
  font-weight: 600;
  padding: 0 6px;
  border-radius: 100px;
  line-height: 1.6;
}

/* ── Menu mobile ─────────────────────────────────────────────────────────── */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.menu-toggle span {
  display: block;
  width: 22px; height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: .2s;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: var(--gap-sm);
  padding: var(--gap-md) var(--gap-lg);
  border-top: 1px solid var(--paper-deep);
  background: var(--paper);
}
.mobile-menu .nav-link {
  font-size: 1rem;
  padding: var(--gap-sm) 0;
  border-bottom: 1px solid var(--paper-warm);
}

/* ── Main ────────────────────────────────────────────────────────────────── */
.main-content { min-height: calc(100vh - 60px - 56px); }

/* ── Footer ──────────────────────────────────────────────────────────────── */
.footer {
  border-top: 1.5px solid var(--paper-deep);
  padding: var(--gap-md) 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  gap: var(--gap-md);
  font-size: .8125rem;
  color: var(--ink-muted);
}
.footer-sep { color: var(--paper-deep); }
.footer a:hover { color: var(--ink); }

/* ── Transição de rota ───────────────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity .2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Responsivo ──────────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .navbar-nav  { display: none; }
  .menu-toggle { display: flex; }
  .mobile-menu.open { display: flex; }
  .footer-inner { flex-direction: column; gap: var(--gap-xs); text-align: center; }
}
</style>
