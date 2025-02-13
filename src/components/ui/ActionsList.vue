<template>
  <div class="actions">
    <img
      v-if="actions.includes('print')"
      src="@/assets/img/icons/print.svg"
      alt="Print"
      class="icon-print"
    />
    <img
      v-if="actions.includes('edit')"
      src="@/assets/img/icons/edit.svg"
      alt="Edit"
      class="icon-edit"
    />
    <img
      v-if="actions.includes('delete')"
      src="@/assets/img/icons/delete.svg"
      alt="Delete"
      class="icon-delete"
    />
  </div>
</template>

<script setup>
defineProps({
  actions: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  margin-right: 20px;
  gap: 40px;
}

.icon-print,
.icon-edit,
.icon-delete {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
