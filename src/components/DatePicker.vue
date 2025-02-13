<template>
  <div class="custom-date-picker">
    <label>Действует с:</label>
    <div class="date-input">
      <input
        type="date"
        v-model="startDate"
        class="date-field"
        :style="{ color: startDate ? '#86939c' : 'transparent' }"
      />
      <span v-if="!startDate" class="placeholder" @click="focusInput('start')">Не выбрано</span>
    </div>
    <label>по:</label>
    <div class="date-input">
      <input
        type="date"
        v-model="endDate"
        class="date-field"
        :style="{ color: endDate ? '#86939c' : 'transparent' }"
      />
      <span
        v-if="!endDate"
        class="placeholder"
        :style="{ color: endDate ? 'transparent' : '#86939c' }"
        @click="focusInput('end')"
        >Не выбрано</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const startDate = ref('')
const endDate = ref('')

const focusInput = (type) => {
  if (type === 'start') {
    document.querySelector('.date-field').focus()
  } else if (type === 'end') {
    document.querySelectorAll('.date-field')[1].focus()
  }
}
</script>

<style scoped>
.custom-date-picker {
  display: flex;
  align-items: center;
}

label {
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 16px;
  color: #0d2839;
}

.date-input {
  position: relative;
  width: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type='date'] {
  width: 100%;
  border: none;
  border-bottom: 1px solid #86939c;
  outline: none;
  font-size: 16px;
  color: transparent;
  background: transparent;
  cursor: pointer;
}

input[type='date']:focus,
input[type='date']:valid {
  border-bottom: none;
}

input[type='date']::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  cursor: pointer;
  opacity: 0.5;
}

input[type='date']:focus {
  border-bottom: none;
}

.placeholder {
  position: absolute;
  left: 15px;
  font-size: 16px;
  color: #86939c;
  pointer-events: auto;
  cursor: pointer;
}
</style>
