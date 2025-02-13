<template>
  <div class="user-info">
    <img src="@/assets/img/icons/userIcon.svg" alt="User" class="user-image" />
    <span class="user-name">{{ userName }}</span>
  </div>
</template>

<script setup>
const userName = 'Name_user'
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 8px;
}

.user-name {
  font-size: 14px;
  color: #333;
}
</style>
