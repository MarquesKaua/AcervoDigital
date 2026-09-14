# 📚 Acervo Digital

Biblioteca pessoal com busca real de livros, acervo no Firebase e diário de leitura.

## Tecnologias

- **Vue 3 + Vite** — front-end reativo
- **Vue Router** — navegação entre páginas
- **Google Books API** — dados reais de livros
- **Firebase Firestore** — banco de dados em tempo real
- **CSS puro** — layout responsivo com design próprio

---

## Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o Firebase

Abra o arquivo `src/firebase.js` e substitua os placeholders pelas suas credenciais:

```js
const firebaseConfig = {
  apiKey:            "SUA_API_KEY",
  authDomain:        "SEU_PROJETO.firebaseapp.com",
  projectId:         "SEU_PROJETO_ID",
  storageBucket:     "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId:             "SEU_APP_ID"
}
```

**Como obter as credenciais:**
1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Crie um projeto (ou abra um existente)
3. Vá em **Configurações do projeto → Seus aplicativos → Adicionar app → Web**
4. Copie o objeto `firebaseConfig` gerado

**Criar o banco no Firestore:**
1. No Firebase Console → **Firestore Database → Criar banco de dados**
2. Escolha modo de produção (as regras do passo seguinte cuidam da segurança)

**Ativar o login (Firebase Authentication):**
1. No Firebase Console → **Authentication → Sign-in method**
2. Ative o provedor **E-mail/senha**
3. Pronto — a tela de login/cadastro do app já usa esse provedor

**Aplicar as regras de segurança (importante!):**
1. No Firebase Console → **Firestore Database → Regras**
2. Abra o arquivo `firestore.rules` deste projeto e cole o conteúdo inteiro no lugar do que já existe
3. Clique em **Publicar**

Essas regras garantem que a biblioteca de cada usuário fique isolada: cada
pessoa só lê e escreve nos próprios livros, guardados em
`usuarios/{uid}/livros`, mesmo que tente acessar a API do Firestore
diretamente. A antiga coleção `livros` (compartilhada por todo mundo) fica
bloqueada — se você já tinha dados nela, veja a nota de migração abaixo.

> **Migrando dados antigos:** como a versão anterior não tinha login, todos
> os livros ficavam numa coleção `livros` única para todo mundo. Ela não é
> migrada automaticamente. Se quiser recuperar aqueles livros, copie-os
> manualmente (via Firebase Console) para dentro de
> `usuarios/SEU_UID/livros` — o UID de cada usuário aparece em
> **Authentication → Users** depois que ele se cadastra.

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

### 4. Build para produção

```bash
npm run build
```

Os arquivos ficam em `dist/`.

### 5. Deploy no GitHub Pages

```bash
# Instale o gh-pages
npm install --save-dev gh-pages

# Adicione ao package.json > scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

> Lembre de ajustar o `base` no `vite.config.js` se necessário:
> ```js
> base: '/nome-do-repositorio/'
> ```

---

## Estrutura do projeto

```
src/
├── App.vue              # Raiz: navbar, footer, sistema de toast, sessão
├── main.js              # Entry point + Vue Router + guarda de rotas
├── firebase.js          # Configuração do Firebase ← EDITAR AQUI
├── style.css            # Design tokens e estilos globais
│
├── composables/
│   └── useAuth.js       # Estado do usuário logado + login/cadastro/logout
│
├── components/
│   ├── BookCard.vue     # Card de livro (busca e biblioteca)
│   ├── SearchBar.vue    # Barra de busca reutilizável
│   └── ModalEdit.vue    # Modal de edição (status, nota, comentário)
│
└── views/
    ├── Home.vue         # Página inicial
    ├── Login.vue        # Tela de login / cadastro
    ├── Search.vue       # Busca via Google Books API
    └── Library.vue      # Biblioteca pessoal (CRUD completo)

firestore.rules          # Regras de segurança — cada usuário só acessa o próprio acervo
```

## Funcionalidades

- **Login e cadastro** — cada pessoa tem sua própria conta e biblioteca
- **Buscar livros** — Google Books API com sugestões iniciais
- **Adicionar** — salva no Firestore com um clique
- **Biblioteca** — visualização em grid com capa, título, autor e status
- **Editar** — altera status, nota (1-5 estrelas) e comentário
- **Remover** — com confirmação
- **Busca local** — filtra dentro da biblioteca
- **Filtros** — por status (Quero ler / Lendo / Finalizado / Abandonado)
- **Ordenação** — mais recentes, maior nota, A-Z, Z-A
- **Responsivo** — funciona em desktop, tablet e celular
- **Toast** — feedback visual para todas as ações

## Como funciona o login

Cada usuário se autentica com e-mail e senha (Firebase Authentication). A
biblioteca de cada um fica guardada separadamente no Firestore, em
`usuarios/{uid_do_usuário}/livros`, em vez da antiga coleção única `livros`
compartilhada por todo mundo. As páginas **Explorar** e **Minha Biblioteca**
exigem login — quem não estiver autenticado é redirecionado para `/login`.

---

## Paleta de cores

| Token          | Hex       | Uso                    |
|----------------|-----------|------------------------|
| `--ink`        | `#1a1410` | Texto principal        |
| `--paper`      | `#f5f0e8` | Fundo                  |
| `--paper-warm` | `#ede6d6` | Cards                  |
| `--accent`     | `#c0392b` | Destaque vermelho      |
| `--gold`       | `#b8952a` | Estrelas de avaliação  |
