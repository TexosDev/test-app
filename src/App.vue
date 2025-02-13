<template>
  <div class="app-layout">
    <SideBar />
    <div class="content-area">
      <MainHeader />
      <MainContent>
        <UserHeader />
        <FilterOptions />
        <DocumentList />
      </MainContent>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue'
import UserHeader from './components/user/UserHeader.vue'
import DocumentList from './components/DocumentList.vue'
import FilterOptions from './components/FilterOptions.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.content-area {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
