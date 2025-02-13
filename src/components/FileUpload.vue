<template>
  <!-- Обёртка для драг-энд-дропа -->
  <div class="upload-wrapper" @drop.prevent="handleDrop" @dragover.prevent>
    <!-- Основной прямоугольник (фон) -->
    <div class="rectangle-25">
      <label for="file-input" class="upload-label">
        <p class="upload-file-text">Загрузить файл</p>

        <p class="choose-file-text">Выберите файл или перетащите его сюда</p>
      </label>

      <input id="file-input" type="file" class="file-input" @change="handleFileChange" />
      <img src="@/assets/img/icons/plus.svg" alt="plus" class="plus-icon" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)

function handleFileChange(event) {
  const files = event.target.files
  if (!files || !files.length) return
  selectedFile.value = files[0]
  console.log('Файл выбран:', selectedFile.value)
}

function handleDrop(event) {
  const files = event.dataTransfer.files
  if (!files || !files.length) return
  selectedFile.value = files[0]
}
</script>

<style scoped>
.upload-wrapper {
  width: 590px;
  height: 157px;
  left: 666px;
  top: 668px;
  cursor: pointer;
  margin: 60px 0;
}

.rectangle-25 {
  width: 100%;
  height: 100%;
  background: #f2f5f8;
  border: 1px solid #b9c2c9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
}

.file-input {
  display: none;
}

.upload-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Текст "Загрузить файл" */
.upload-file-text {
  position: absolute;
  width: 111px;
  height: 22px;
  left: 240px;
  top: 52px;

  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0d2839;
}

.choose-file-text {
  position: absolute;
  width: 296px;
  height: 22px;
  left: 180px;
  top: 84px;

  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #86939c;
}

/* Иконка "плюс" */
.plus-icon {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 279px;
  top: 14px;
}
</style>
