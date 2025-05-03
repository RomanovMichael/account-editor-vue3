<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { type IAccount, ACCOUNT_TYPES } from 'TYPES/account'
import { parseLabelsString, stringifyLabels } from 'UTILS/labels'

const props = defineProps<{
  account: IAccount
}>()

const emit = defineEmits<{
  (e: 'update', updated: IAccount): void
  (e: 'remove'): void
}>()

const localAccount = ref({ ...props.account })

watch(
  localAccount,
  (newValue) => {
    emit('update', newValue)
  },
  { deep: true },
)

const labelsString = computed({
  get: () => stringifyLabels(localAccount.value.labels),
  set: (val: string) => {
    localAccount.value.labels = parseLabelsString(val)
  },
})
</script>

<template>
  <div class="account-editor-item">
    <ui-textarea
      class="account-editor-item__marks"
      v-model="labelsString"
      autoResize
      maxlength="50"
      placeholder="Метки"
    />
    <ui-select
      class="type-field"
      v-model="localAccount.typeId"
      :options="ACCOUNT_TYPES"
      optionLabel="label"
      optionValue="id"
    />
    <ui-input-text
      class="account-editor-item__login"
      v-model="localAccount.login"
      maxlength="100"
      placeholder="Логин"
    />
    <ui-password
      class="account-editor-item__password"
      v-if="localAccount.typeId === 'local'"
      v-model="localAccount.password"
      toggleMask
      :feedback="false"
      maxlength="100"
      placeholder="Пароль"
    />
    <ui-button icon="pi pi-trash" severity="danger" @click="$emit('remove')" />
  </div>
</template>

<style scoped>
.account-editor-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
}

.account-editor-item__login {
  flex: 1 1 auto;
  min-width: 9.375rem;
}

@media (max-width: 768px) {
  .account-editor-item {
    flex-direction: column;
    align-items: stretch;
  }

  .account-editor-item__login {
    flex: 1 1 100%;
    min-width: auto;
  }

  button {
    margin-left: auto;
  }
}
</style>
