<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-logo">
        <span class="logo-icon">📚</span>
        <span class="logo-text">Acervo<em>Digital</em></span>
      </div>

      <h1 class="login-title">{{ modo === 'login' ? 'Entrar' : 'Criar conta' }}</h1>
      <p class="login-sub">
        {{ modo === 'login'
          ? 'Acesse sua biblioteca pessoal.'
          : 'Sua biblioteca fica separada e só você tem acesso.' }}
      </p>

      <form @submit.prevent="enviar" class="login-form">
        <label v-if="modo === 'cadastro'" class="field">
          <span>Nome</span>
          <input v-model="nome" class="input" type="text" autocomplete="name" />
        </label>

        <label class="field">
          <span>E-mail</span>
          <input v-model="email" class="input" type="email" required autocomplete="email" />
        </label>

        <label class="field">
          <span>Senha</span>
          <input v-model="senha" class="input" type="password" required minlength="6" autocomplete="current-password" />
        </label>

        <p v-if="erro" class="login-erro">⚠️ {{ erro }}</p>

        <button class="btn btn-primary btn-lg login-submit" type="submit" :disabled="carregando">
          {{ carregando ? 'Aguarde…' : (modo === 'login' ? 'Entrar' : 'Criar conta') }}
        </button>
      </form>

      <p class="login-switch">
        <template v-if="modo === 'login'">
          Não tem conta?
          <button type="button" @click="alternar">Criar uma agora</button>
        </template>
        <template v-else>
          Já tem conta?
          <button type="button" @click="alternar">Entrar</button>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login, registrar } from '../composables/useAuth.js'

const router = useRouter()
const route  = useRoute()

const modo        = ref('login') // 'login' | 'cadastro'
const nome        = ref('')
const email       = ref('')
const senha       = ref('')
const erro        = ref('')
const carregando  = ref(false)

function alternar() {
  modo.value = modo.value === 'login' ? 'cadastro' : 'login'
  erro.value = ''
}

async function enviar() {
  erro.value = ''
  carregando.value = true

  const resultado = modo.value === 'login'
    ? await login(email.value, senha.value)
    : await registrar(nome.value, email.value, senha.value)

  carregando.value = false

  if (!resultado.ok) {
    erro.value = resultado.message
    return
  }

  router.replace(route.query.redirect || '/')
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 60px - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-lg);
}

.login-card {
  width: 100%;
  max-width: 380px;
  background: var(--paper-warm);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-lg);
  padding: var(--gap-xl);
  box-shadow: var(--shadow-card);
}

.login-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: var(--gap-lg);
}
.login-logo em { font-style: italic; color: var(--accent); }
.logo-icon { font-size: 1.4rem; }

.login-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--ink);
  margin-bottom: var(--gap-xs);
}
.login-sub {
  color: var(--ink-muted);
  font-size: .9rem;
  margin-bottom: var(--gap-xl);
}

.login-form { display: flex; flex-direction: column; gap: var(--gap-md); }

.field { display: flex; flex-direction: column; gap: 6px; }
.field span {
  font-size: .8125rem;
  font-weight: 600;
  color: var(--ink-soft);
}

.login-erro {
  color: var(--accent);
  font-size: .8125rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-dim);
  border-radius: var(--radius-sm);
  padding: var(--gap-sm) var(--gap-md);
}

.login-submit { width: 100%; margin-top: var(--gap-xs); }

.login-switch {
  margin-top: var(--gap-lg);
  text-align: center;
  font-size: .875rem;
  color: var(--ink-muted);
}
.login-switch button {
  color: var(--accent);
  font-weight: 600;
  margin-left: 4px;
}
.login-switch button:hover { text-decoration: underline; }
</style>
