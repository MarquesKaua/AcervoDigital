import { createApp, watch } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Library from './views/Library.vue'
import Login from './views/Login.vue'
import { currentUser } from './composables/useAuth.js'
import './style.css'

const routes = [
  { path: '/',           component: Home,    name: 'home' },
  { path: '/buscar',     component: Search,  name: 'search',   meta: { requiresAuth: true } },
  { path: '/biblioteca', component: Library, name: 'library',  meta: { requiresAuth: true } },
  { path: '/login',      component: Login,   name: 'login' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

// Espera o Firebase confirmar se há (ou não) um usuário logado antes de
// deixar a navegação prosseguir, evitando um "flash" da página protegida.
function aguardarAuthPronto() {
  if (currentUser.value !== undefined) return Promise.resolve()
  return new Promise(resolve => {
    const parar = watch(currentUser, (valor) => {
      if (valor !== undefined) {
        parar()
        resolve()
      }
    })
  })
}

router.beforeEach(async (to) => {
  await aguardarAuthPronto()

  const logado = !!currentUser.value

  if (to.meta.requiresAuth && !logado) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
  if (to.name === 'login' && logado) {
    return { path: '/' }
  }
})

createApp(App).use(router).mount('#app')
