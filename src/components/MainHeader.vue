<template>
  <header class="header">
    <Breadcrumbs />
    <div class="header-right">
      <UserInfo />
      <UserActions />
    </div>
  </header>
</template>

<script setup>
import Breadcrumbs from './MainBreadcrubs.vue'
import UserInfo from './user/UserInfo.vue'
import UserActions from './user/UserAction.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  height: 72px;
  background-color: #fff;
}

.header-right {
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;
}
</style>
