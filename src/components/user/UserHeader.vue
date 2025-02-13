<template>
  <div class="user-header">
    <div class="user-info">
      <img src="@/assets/img/userLogo.png" alt="User" class="user-image" />
      <div class="user-info-container">
        <div class="user-info-container__name">
          <h1 class="user-info-container__name-text">{{ userName }}</h1>
          <img src="@/assets/img/icons/fGender.svg" alt="Gender" class="user-gender" />
        </div>
        <div class="user-info-container__contacts">
          <div class="user-contacts">
            <SocialNetworks class="user-contacts__social-networks" />
            <a href="#" class="user-comment">Комментарии</a>
          </div>
        </div>
      </div>
    </div>
    <div class="user-details-container">
      <UserDetails class="user-details-status" title="Статус">
        <template #description>
          <StatusComp active="true" status="Активен" />
        </template>
      </UserDetails>
      <div class="user-details-list">
        <UserDetails v-for="(item, i) in details" :key="i" :title="item.title">
          <template #description>
            <span>{{ item.description }}</span>
          </template>
        </UserDetails>
      </div>
    </div>
    <ActionsList class="user-actions" :actions="['edit', 'delete']" />
  </div>
</template>

<script setup>
import UserDetails from './UserDetails.vue'
import SocialNetworks from '../SocialNetworks.vue'
import StatusComp from '../ui/StatusIndicator.vue'
import ActionsList from '../ui/ActionsList.vue'

const userName = 'Абрамова Екатерина'

const details = [
  {
    title: 'Телефон',
    description: '8-900-000-00-00',
  },
  {
    title: 'Дата рождения',
    description: '25.04.2004 (17 лет)',
  },
  {
    title: 'Телефон родителей',
    description: '8-900-000-00-00',
  },
  {
    title: 'Адрес',
    description: 'г. Краснодар, ул. Советская 24, кв. 208',
  },
]
</script>

<style scoped>
.user-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 152px;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 30px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin-right: 16px;
}

.user-actions {
  display: flex;
  flex-direction: column;
}

.user-contacts {
  display: flex;
  align-items: center;
}

.user-contacts__social-networks {
  margin-right: 26px;
}

.user-comment {
  color: #007bff;
  text-decoration: none;
  margin-left: 8px;
}

.user-details-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.user-info-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
}

.user-info-container__name {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.user-info-container__name-text {
  font-family: 'Alegreya Sans', serif;
  font-weight: 700;
  color: #458afb;
  margin: 0;
  -webkit-text-stroke: 1px black;
  text-shadow: 0px 4px 4px #00000040;
}

.user-details-container {
  position: relative;
}

.user-details-status {
  position: absolute;
  left: -90px;
  bottom: 0;
}
</style>
