<script setup lang="ts">
import { useAccountStore } from 'STORES/account'
import AccountEditor from './components/AccountEditor.vue'

const accountStore = useAccountStore()
</script>

<template>
  <div class="app-content">
    <AccountEditor />
    <pre>Data
      <br><br>
      {{ accountStore.accounts }}
    </pre>
  </div>
</template>

<style scoped>
.app-content {
  display: flex;
  align-items: stretch;
  gap: 2.5rem;
  overflow: hidden;
  padding: 1rem;
}

@media (max-width: 1024px) {
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
