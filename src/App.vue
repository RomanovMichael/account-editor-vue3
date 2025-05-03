<script setup lang="ts">
import AccountEditor from './components/AccountEditor.vue'
</script>

<template>
  <div class="app-content">
    <AccountEditor />
    <pre>Data</pre>
  </div>
</template>

<style scoped>
.app-content {
  display: flex;
  align-items: stretch;
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .app-content {
    flex-direction: column-reverse;
  }
}

pre {
  border-radius: 0.5rem;
  padding: 1rem;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
