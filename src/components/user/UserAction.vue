<template>
  <div class="user-actions">
    <img src="@/assets/img/icons/settingsIcon.svg" alt="Settings" class="icon-settings" />
    <img src="@/assets/img/icons/logoutIcon.svg" alt="Logout" class="icon-logout" />
  </div>
</template>

<style scoped>
.user-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.icon-settings,
.icon-logout {
  font-size: 18px;
  margin-left: 16px;
  cursor: pointer;
}
</style>
