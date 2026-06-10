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

**Criar a coleção no Firestore:**
1. No Firebase Console → **Firestore Database → Criar banco de dados**
2. Escolha modo de teste (para desenvolvimento)
3. A coleção `livros` é criada automaticamente ao adicionar o primeiro livro

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
├── App.vue              # Raiz: navbar, footer, sistema de toast
├── main.js              # Entry point + Vue Router
├── firebase.js          # Configuração do Firebase ← EDITAR AQUI
├── style.css            # Design tokens e estilos globais
│
├── components/
│   ├── BookCard.vue     # Card de livro (busca e biblioteca)
│   ├── SearchBar.vue    # Barra de busca reutilizável
│   └── ModalEdit.vue    # Modal de edição (status, nota, comentário)
│
└── views/
    ├── Home.vue         # Página inicial
    ├── Search.vue       # Busca via Google Books API
    └── Library.vue      # Biblioteca pessoal (CRUD completo)
```

## Funcionalidades

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

---

## Paleta de cores

| Token          | Hex       | Uso                    |
|----------------|-----------|------------------------|
| `--ink`        | `#1a1410` | Texto principal        |
| `--paper`      | `#f5f0e8` | Fundo                  |
| `--paper-warm` | `#ede6d6` | Cards                  |
| `--accent`     | `#c0392b` | Destaque vermelho      |
| `--gold`       | `#b8952a` | Estrelas de avaliação  |
