<template>
  <div class="status-indicator">
    <span class="status-dot" :class="{ active: status === 'Активен' }"></span>
    <span>{{ status }}</span>
  </div>
</template>

<script setup>
defineProps({
  status: String,
  active: Boolean,
})
</script>

<style scoped>
.status-indicator {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.status-dot {
  width: 9px;
  height: 9px;
  background-color: #fe6845;
  border-radius: 2px;
  margin-right: 5px;
}

.active {
  background-color: #9ecb45;
}
</style>
