<template>
  <div class="home">
    <!-- Hero ──────────────────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <p class="hero-eyebrow">Seu diário de leituras</p>
          <h1 class="hero-heading">
            Cada livro conta<br />
            <em>uma história sua.</em>
          </h1>
          <p class="hero-sub">
            Busque livros, monte sua biblioteca pessoal e registre
            o que você sentiu em cada leitura. Tudo num só lugar.
          </p>
          <div class="hero-actions">
            <router-link to="/buscar" class="btn btn-primary btn-lg">
              Explorar livros →
            </router-link>
            <router-link to="/biblioteca" class="btn btn-ghost btn-lg">
              Minha biblioteca
            </router-link>
          </div>
        </div>

        <div class="hero-visual">
          <div class="books-stack">
            <div v-for="(b, i) in demoBooks" :key="i" class="demo-book" :style="b.style">
              <span>{{ b.emoji }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Como funciona ──────────────────────────────────────────────────────── -->
    <section class="how-section">
      <div class="container">
        <h2 class="section-title">Como funciona</h2>
        <div class="steps-row">
          <div class="step" v-for="step in steps" :key="step.num">
            <div class="step-num">{{ step.num }}</div>
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA ───────────────────────────────────────────────────────────────── -->
    <section class="cta-section">
      <div class="container cta-inner">
        <div class="cta-quote">
          <blockquote>
            "Uma leitura bem registrada é uma memória que não desaparece."
          </blockquote>
        </div>
        <router-link to="/buscar" class="btn btn-accent btn-lg">
          Começar agora
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const demoBooks = [
  { emoji: '📗', style: 'transform: rotate(-8deg) translateX(-20px); background:#2d6a4f;' },
  { emoji: '📕', style: 'transform: rotate(3deg) translateY(-10px); background:#c0392b; z-index:2;' },
  { emoji: '📘', style: 'transform: rotate(10deg) translateX(15px); background:#1a4a7a;' },
  { emoji: '📙', style: 'transform: rotate(-3deg) translateY(5px); background:#b8952a;' },
]

const steps = [
  { num: '01', icon: '🔍', title: 'Busque', desc: 'Digite o título, autor ou tema. Buscamos na base do Google Books com milhões de títulos.' },
  { num: '02', icon: '➕', title: 'Adicione', desc: 'Clique em adicionar e o livro vai direto para sua biblioteca pessoal no Firebase.' },
  { num: '03', icon: '✏️', title: 'Registre', desc: 'Marque o status de leitura, dê uma nota de 1 a 5 e deixe suas impressões.' },
  { num: '04', icon: '📚', title: 'Organize', desc: 'Filtre por status, ordene por nota ou pesquise dentro da sua biblioteca.' },
]
</script>

<style scoped>
/* ── Hero ────────────────────────────────────────────────────────────────── */
.hero {
  padding: var(--gap-2xl) 0;
  border-bottom: 1.5px solid var(--paper-deep);
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--gap-2xl);
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: .8125rem;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: var(--accent);
  margin-bottom: var(--gap-md);
}

.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: var(--gap-lg);
}
.hero-heading em {
  font-style: italic;
  color: var(--accent);
}

.hero-sub {
  font-size: 1.0625rem;
  color: var(--ink-soft);
  line-height: 1.7;
  max-width: 440px;
  margin-bottom: var(--gap-xl);
}

.hero-actions {
  display: flex;
  gap: var(--gap-md);
  flex-wrap: wrap;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 1rem;
}

/* ── Visual ──────────────────────────────────────────────────────────────── */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.books-stack {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 280px;
  width: 100%;
}

.demo-book {
  width: 90px;
  height: 130px;
  border-radius: 6px 10px 10px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  position: absolute;
  box-shadow: 4px 4px 20px rgba(26,20,16,.25);
  border-left: 8px solid rgba(0,0,0,.15);
  transition: transform .3s var(--ease);
}
.demo-book:hover { transform: rotate(0deg) scale(1.08) !important; z-index: 10 !important; }

/* ── Como funciona ───────────────────────────────────────────────────────── */
.how-section {
  padding: var(--gap-2xl) 0;
  border-bottom: 1.5px solid var(--paper-deep);
}

.section-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: var(--gap-xl);
  text-align: center;
}

.steps-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-lg);
}

.step {
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
  padding: var(--gap-lg);
  background: var(--paper-warm);
  border: 1.5px solid var(--paper-deep);
  border-radius: var(--radius-md);
  transition: border-color .2s, transform .2s;
}
.step:hover { border-color: var(--ink-muted); transform: translateY(-3px); }

.step-num {
  font-family: var(--font-mono);
  font-size: .75rem;
  color: var(--accent);
  font-weight: 600;
  letter-spacing: .08em;
}
.step-icon { font-size: 1.75rem; }

.step h3 {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--ink);
}
.step p {
  font-size: .875rem;
  color: var(--ink-soft);
  line-height: 1.6;
}

/* ── CTA ─────────────────────────────────────────────────────────────────── */
.cta-section {
  padding: var(--gap-2xl) 0;
  background: var(--paper-warm);
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-xl);
  text-align: center;
}

.cta-quote blockquote {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-style: italic;
  color: var(--ink-soft);
  max-width: 600px;
  line-height: 1.6;
}

/* ── Responsivo ──────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .steps-row { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .steps-row { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .btn-lg { text-align: center; justify-content: center; }
}
</style>
