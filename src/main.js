import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Library from './views/Library.vue'
import './style.css'

const routes = [
  { path: '/',         component: Home,    name: 'home' },
  { path: '/buscar',   component: Search,  name: 'search' },
  { path: '/biblioteca', component: Library, name: 'library' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
