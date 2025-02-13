<template>
  <div class="document-list">
    <div v-for="doc in filteredDocuments" :key="doc.id" class="document-list__item">
      <DocumentCard :document="doc" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useDocumentStore } from '../stores/useDocumentStore'
import DocumentCard from './DocumentCard.vue'

const documentStore = useDocumentStore()

onMounted(async () => {
  await documentStore.fetchDocuments()
})

const filteredDocuments = computed(() => documentStore.filteredDocuments)
</script>

<style scoped>
.document-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.document-list__item {
  width: 200px;
}
</style>
