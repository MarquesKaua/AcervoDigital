// src/firebase.js
// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DO FIREBASE
// Substitua os valores abaixo pelas suas credenciais do Firebase Console.
//
// Como obter:
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto (ou abra um existente)
// 3. Clique em "Adicionar app" → Web (</>)
// 4. Copie o objeto firebaseConfig gerado e cole aqui
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvzFDVXYVNULdvPfI7BatLZSNMSHkDz6M",
  authDomain: "acervodigital-f4649.firebaseapp.com",
  projectId: "acervodigital-f4649",
  storageBucket: "acervodigital-f4649.firebasestorage.app",
  messagingSenderId: "228044737693",
  appId: "1:228044737693:web:1a0f8e315a7f51a27a9874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
