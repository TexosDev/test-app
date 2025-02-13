<template>
  <div class="custom-input">
    <label for="documentName">{{ label }} <span class="required">*</span></label>
    <input type="text" id="documentName" v-model="documentName" required />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const documentName = ref('')

defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.custom-input {
  position: relative;
  margin-bottom: 20px;
}

label {
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 16px;
  color: #86939c;
  display: block;
}

.required {
  color: #ff4500;
}

input[type='text'] {
  width: 100%;
  border: none;
  border-bottom: 2px solid #458afb;
  outline: none;
  font-size: 16px;
  padding: 5px 0;
  transition: border-color 0.3s;
}

input[type='text']:focus {
  border-bottom-color: #0056b3;
}
</style>
