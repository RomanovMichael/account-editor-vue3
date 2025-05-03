<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { type IAccount } from 'TYPES/account'
import AccountEditorItem from './AccountEditorItem.vue'

const accounts = ref<IAccount[]>([])

const addAccount = () => {
  accounts.value.push({
    id: uuidv4(),
    labelsString: '',
    typeId: 'ldap',
    login: '',
    password: null,
  })
}

const updateAccount = (id: string, updated: IAccount) => {
  const index = accounts.value.findIndex((a) => a.id === id)
  if (index !== -1) {
    accounts.value[index] = updated
  }
}

const removeAccount = (id: string) => {
  accounts.value = accounts.value.filter((a) => a.id !== id)
}
</script>

<template>
  <div class="account-editor">
    <div class="account-editor__topline">
      <h2>Учётные записи</h2>
      <ui-button icon="pi pi-plus" @click="addAccount" />
    </div>
    <div class="account-editor__hint">
      <i class="pi pi-question-circle"></i>
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
    </div>
    <div class="account-editor__list">
      <account-editor-item
        v-for="account in accounts"
        :key="account.id"
        :account="account"
        @update="updateAccount(account.id, $event)"
        @remove="removeAccount(account.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.account-editor {
  max-width: 56.25rem;
  padding: 1.25rem;
}

.account-editor__topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.account-editor__hint {
  margin: 0.625rem 0;
  padding: 0.625rem;
  background: #f4f4f4;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  color: #555;
}

.account-editor__list {
  margin-top: 1.25rem;
}
</style>
