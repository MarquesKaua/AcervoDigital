<template>
  <div class="searchbar">
    <div class="searchbar-inner">
      <span class="searchbar-icon">🔍</span>
      <input
        class="searchbar-input"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="$emit('search')"
        autocomplete="off"
        spellcheck="false"
      />
      <button
        v-if="modelValue"
        class="searchbar-clear"
        @click="$emit('update:modelValue', ''); $emit('clear')"
        aria-label="Limpar"
      >✕</button>
      <button class="searchbar-btn btn btn-primary" @click="$emit('search')">
        Buscar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue:  { type: String, default: '' },
  placeholder: { type: String, default: 'Buscar livros…' }
})
defineEmits(['update:modelValue', 'search', 'clear'])
</script>

<style scoped>
.searchbar { width: 100%; }

.searchbar-inner {
  display: flex;
  align-items: center;
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: box-shadow .2s;
}
.searchbar-inner:focus-within {
  box-shadow: 0 0 0 4px rgba(26,20,16,.1);
}

.searchbar-icon {
  padding: 0 var(--gap-md);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.searchbar-input {
  flex: 1;
  padding: 14px 0;
  font-size: 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
}
.searchbar-input::placeholder { color: var(--ink-muted); }

.searchbar-clear {
  padding: 0 var(--gap-md);
  color: var(--ink-muted);
  font-size: .875rem;
  flex-shrink: 0;
  transition: color .15s;
}
.searchbar-clear:hover { color: var(--accent); }

.searchbar-btn {
  border-radius: 0;
  padding: 14px 24px;
  flex-shrink: 0;
  font-size: .9375rem;
}
</style>
