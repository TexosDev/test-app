import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isVisible: false,
  }),
  actions: {
    openModal() {
      this.isVisible = true
    },
    closeModal() {
      this.isVisible = false
    },
  },
})
