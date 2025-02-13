<template>
  <div class="document-card">
    <div class="document-card-content">
      <div class="document-card-content-top">
        <div class="document-header">
          <h2>{{ truncatedTitle }}</h2>
        </div>
        <StatusIndicator :status="document.status" />
        <p class="document-date">{{ document.createdAt }} - {{ document.endAt }}</p>
      </div>
      <ActionsList class="document-actions" :actions="['print', 'edit', 'delete']" />
    </div>
    <div class="document-card-image">
      <img class="document-card-image-icon" :src="imagePath" alt="Document" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ActionsList from './ui/ActionsList.vue'
import StatusIndicator from './ui/StatusIndicator.vue'

const props = defineProps({
  document: {
    type: Object,
    default: () => ({}),
  },
})

const imagePath = computed(() => {
  return `../src/assets/img/icons/${props.document.image}`
})

console.log(imagePath.value)

const truncatedTitle = computed(() => {
  const title = props.document.title
  return title.length > 11 ? title.slice(0, 11) + '...' : title
})
</script>

<style scoped>
.document-card {
  width: 378px;
  height: 157px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.document-card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.document-card-content-top {
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
}

.document-header h2 {
  font-family: 'Alegreya Sans';
  font-weight: 700;
  font-size: 24px;
  padding: 0;
  margin: 0;
}

.document-type,
.document-date {
  margin: 0 0 4px;
  color: #666;
  font-size: 14px;
}

.document-actions {
  display: flex;
  gap: 30px;
  margin: 0;
}

.document-actions button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px;
}

.icon {
  width: 25px;
  height: 25px;
}

.document-card-image {
  width: 117px;
  height: 117px;
  background-color: #f2f5f8;
  border-radius: 10px;
  position: relative;
}

.document-card-image-icon {
  width: 58px;
  height: 58px;
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
