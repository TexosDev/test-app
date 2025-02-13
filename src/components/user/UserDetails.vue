<template>
  <div class="user-details">
    <span class="title">{{ title }}</span>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.user-details {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  color: #333;
  gap: 5px;
}

.title {
  font-weight: bold;
  color: #999;
}

.description {
  color: #333;
}
</style>
