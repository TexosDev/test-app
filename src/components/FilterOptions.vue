<template>
  <div class="filter-options">
    <div class="filter-options-container">
      <div class="filter-item">
        <label>Тип документа</label>
        <v-select
          :options="documentTypes"
          v-model="documentStore.filters.type"
          class="custom-select"
        />
      </div>
      <div class="filter-item">
        <label>Статус</label>
        <v-select
          :options="statuses"
          v-model="documentStore.filters.status"
          class="custom-select"
        />
      </div>
      <div class="filter-item">
        <label>Сортировать по</label>
        <v-select
          :options="sortOptions"
          v-model="documentStore.filters.sortBy"
          class="custom-select"
        />
      </div>
    </div>
    <CommonButton :text="'Загрузить'" />
  </div>
</template>

<script setup>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import CommonButton from './CommonButton.vue'
import { useDocumentStore } from '../stores/useDocumentStore'
const documentStore = useDocumentStore()

const documentTypes = ['Не выбрано', 'Договор', 'Справка', 'Анкета']
const statuses = ['Не выбрано', 'Активен', 'Неактивен']
const sortOptions = ['Дате', 'Названию']
</script>

<style scoped>
@import 'vue-select/dist/vue-select.css';

.filter-options {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.filter-options-container {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.filter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.custom-select {
  width: 150px;
  font-size: 14px;
  color: #1e73be;
  border: none;
  background: none;
  cursor: pointer;
}

.custom-select .vs__dropdown-toggle {
  border: none;
  box-shadow: none;
  background: none;
}

.custom-select .vs__selected {
  color: #1e73be;
}

.custom-select .vs__dropdown-icon {
  fill: #1e73be;
}
</style>
