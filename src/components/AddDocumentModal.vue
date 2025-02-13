<template>
  <div v-if="modalStore.isVisible" class="modal-overlay" @click.self="modalStore.closeModal">
    <div class="modal-content">
      <button class="close-button" @click="modalStore.closeModal">×</button>
      <h2 class="modal-title">Добавить документ</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label">Тип документа:<span class="required">*</span></label>
          <div class="radio-group">
            <div class="radio-item">
              <input type="radio" id="contract" value="Договор" v-model="documentType" />
              <label for="contract">Договор</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="report" value="Справка" v-model="documentType" />
              <label for="report">Справка</label>
            </div>
            <div class="radio-item">
              <input type="radio" id="other" value="Другое" v-model="documentType" />
              <label for="other">Другое</label>
            </div>
          </div>
        </div>
        <CommonInput label="Название документа" />
        <CommonInput label="Номер" />
        <DatePicker v-model="dateRange" />
        <div class="checkbox-group">
          <input type="checkbox" v-model="notifyOnEnd" />
          <label>Оповещать об окончании</label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" v-model="createTaskOnEnd" />
          <label>Создавать задачу при окончании</label>
        </div>
        <FileUpload />
        <div class="button-group">
          <CommonButton :text="'Добавить документ'" />
          <CommonButton :text="'Отмена'" @click="modalStore.closeModal" gray />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/useModalStore'
import CommonButton from './CommonButton.vue'
import CommonInput from './CommonInput.vue'
import DatePicker from './DatePicker.vue'
import FileUpload from './FileUpload.vue'

const modalStore = useModalStore()

const documentType = ref('')
const documentName = ref('')
const documentNumber = ref('')
const startDate = ref('')
const endDate = ref('')
const notifyOnEnd = ref(false)
const createTaskOnEnd = ref(false)
const file = ref(null)

const dateRange = ref({
  start: null,
  end: null,
})

const submitForm = () => {
  console.log({
    documentType: documentType.value,
    documentName: documentName.value,
    documentNumber: documentNumber.value,
    startDate: startDate.value,
    endDate: endDate.value,
    notifyOnEnd: notifyOnEnd.value,
    createTaskOnEnd: createTaskOnEnd.value,
    file: file.value,
  })
  modalStore.closeModal()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-title {
  font-family: ' Alegreya Sans';
  font-weight: 700;
  font-size: 36px;
  line-height: 43.2px;
  letter-spacing: 0%;
  color: #458afb;
  margin-bottom: 50px;
}

.modal-content {
  position: absolute;
  width: 650px;
  height: 907px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
}

.form-label {
  font-family: 'Alegreya Sans';
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  letter-spacing: 0%;
  margin-right: 15px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0 15px 0;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
}

.upload {
  border: 1px dashed #ccc;
  padding: 10px;
  text-align: center;
}

.submit-button {
  background-color: #ffbd27;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.cancel-button {
  background-color: #ccc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.button-group {
  display: flex;
  justify-content: space-evenly;
}

.required {
  color: #ff4500;
}
</style>
