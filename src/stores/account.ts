import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type IAccount } from 'TYPES/account'
import { loadFromLocalStorage, saveToLocalStorage } from 'UTILS/storage'

const LS_KEY = 'accounts'

export const useAccountStore = defineStore('account', () => {
  const accounts = ref<IAccount[]>(loadFromLocalStorage<IAccount[]>(LS_KEY) || [])

  const addAccount = (account: IAccount) => {
    accounts.value.push(account)
    saveToLocalStorage(LS_KEY, accounts.value)
  }

  const updateAccount = (id: string, updated: IAccount) => {
    const index = accounts.value.findIndex((a) => a.id === id)
    if (index !== -1) {
      accounts.value[index] = updated
      saveToLocalStorage(LS_KEY, accounts.value)
    }
  }

  const removeAccount = (id: string) => {
    accounts.value = accounts.value.filter((a) => a.id !== id)
    saveToLocalStorage(LS_KEY, accounts.value)
  }

  const accountsList = computed(() => accounts.value)

  return { accounts, accountsList, addAccount, updateAccount, removeAccount }
})
