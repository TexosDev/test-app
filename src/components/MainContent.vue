<template>
  <main class="main-content">
    <slot></slot>
    <AddDocumentModal />
  </main>
</template>

<script setup>
import AddDocumentModal from './AddDocumentModal.vue'
</script>
<style scoped>
.main-content {
  padding: 20px 60px;
  background-color: #e6dcdc33;
  flex-grow: 1;
}
</style>
