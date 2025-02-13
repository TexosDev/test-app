<template>
  <aside class="sidebar">
    <img class="sidebar__logo" src="@/assets/img/logo.png" alt="logo" />
    <nav>
      <ul>
        <MenuItem icon="home" title="Главная" />
        <MenuItem icon="calendar" title="Расписание" />
        <MenuItem icon="study" title="Ученики" />
        <MenuItem icon="teacher" title="Преподаватели" />
        <MenuItem icon="lesson" />
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
</script>

<style scoped>
.sidebar {
  width: 138px;
  background-color: #4a90e2;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.sidebar__logo {
  width: 95px;
  height: 42px;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

nav li + li {
  margin-top: 10px;
}
</style>
