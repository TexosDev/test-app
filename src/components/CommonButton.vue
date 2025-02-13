<template>
  <button class="add-document-button" :class="{ gray: gray }" @click="modalStore.openModal">
    {{ text }}
  </button>
</template>

<script setup>
import { useModalStore } from '../stores/useModalStore'

defineProps({
  text: {
    type: String,
    required: true,
  },
  gray: {
    type: Boolean,
    default: false,
  },
})

const modalStore = useModalStore()
</script>

<style scoped>
.add-document-button {
  width: 242px;
  height: 50px;
  background-color: #ffbd27;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.add-document-button:hover {
  background-color: #d4ac0d;
}

.add-document-button.gray {
  background-color: #d5dadf;
  color: #fff;
}

.add-document-button.gray:hover {
  background-color: #696969;
}
</style>
