<template>
  <li>
    <a href="#">
      <img :src="`./src/assets/img/icons/${icon}.svg`" :alt="title" />
      <span v-if="title"> {{ title }}</span>
    </a>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: String,
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

img {
  width: 30px;
  height: 30px;
}
</style>
