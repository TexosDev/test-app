import { defineStore } from 'pinia'

export const useDocumentStore = defineStore('documentStore', {
  state: () => ({
    documents: [],
    filters: {
      type: 'Не выбрано',
      status: 'Не выбрано',
      sortBy: 'Дате',
    },
  }),
  actions: {
    async fetchDocuments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        this.documents = data.slice(0, 8).map((post) => ({
          id: post.id,
          title: post.title,
          type: 'Тип документа',
          status: this.randomStatus(),
          image: this.randomImage(),
          createdAt: this.randomDate(),
          endAt: this.randomDate(),
        }))
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    },
    randomStatus() {
      const statuses = ['Активен', 'Расторгнут', 'На рассмотрении']
      return statuses[Math.floor(Math.random() * statuses.length)]
    },
    randomImage() {
      const images = ['doc.svg', 'xls.svg', 'jpg.svg', 'pdf.svg']
      return images[Math.floor(Math.random() * images.length)]
    },
    randomDate() {
      const start = new Date(2020, 0, 1)
      const end = new Date()
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      return date.toISOString().split('T')[0]
    },
  },
  getters: {
    filteredDocuments(state) {
      let filtered = state.documents

      if (state.filters.type !== 'Не выбрано') {
        filtered = filtered.filter((doc) => doc.type === state.filters.type)
      }

      if (state.filters.status !== 'Не выбрано') {
        filtered = filtered.filter((doc) => doc.status === state.filters.status)
      }

      if (state.filters.sortBy === 'Дате') {
        filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      } else if (state.filters.sortBy === 'Названию') {
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
      }

      return filtered
    },
  },
})
