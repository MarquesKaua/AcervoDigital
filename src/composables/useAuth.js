// src/composables/useAuth.js
// ─────────────────────────────────────────────────────────────────────────────
// Estado global e simples de autenticação, compartilhado por toda a aplicação.
// Cada usuário autenticado tem um `uid` único do Firebase, usado para isolar
// os dados de cada um (veja src/views/Search.vue e src/views/Library.vue).
// ─────────────────────────────────────────────────────────────────────────────
import { ref } from 'vue'
import { auth } from '../firebase.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'

// `undefined` = ainda não sabemos (Firebase está checando o localStorage)
// `null`      = ninguém logado
// objeto      = usuário logado
export const currentUser = ref(undefined)

onAuthStateChanged(auth, (user) => {
  currentUser.value = user
})

function mensagemErro(code) {
  const mapa = {
    'auth/email-already-in-use': 'Já existe uma conta com esse e-mail.',
    'auth/invalid-email':        'E-mail inválido.',
    'auth/weak-password':        'A senha precisa ter pelo menos 6 caracteres.',
    'auth/invalid-credential':   'E-mail ou senha incorretos.',
    'auth/wrong-password':       'E-mail ou senha incorretos.',
    'auth/user-not-found':       'E-mail ou senha incorretos.',
    'auth/too-many-requests':    'Muitas tentativas. Tente novamente em instantes.'
  }
  return mapa[code] || 'Não foi possível completar a operação. Tente novamente.'
}

export async function registrar(nome, email, senha) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha)
    if (nome) await updateProfile(cred.user, { displayName: nome })
    return { ok: true }
  } catch (e) {
    return { ok: false, message: mensagemErro(e.code) }
  }
}

export async function login(email, senha) {
  try {
    await signInWithEmailAndPassword(auth, email, senha)
    return { ok: true }
  } catch (e) {
    return { ok: false, message: mensagemErro(e.code) }
  }
}

export async function logout() {
  await signOut(auth)
}
