<template>
  <div class="breadcrumb-container">
    <fluent-breadcrumb>
      <fluent-breadcrumb-item
        v-for="breadcrumb in breadcrumbs"
        :href="breadcrumb.path"
        >{{ breadcrumb.text }}</fluent-breadcrumb-item
      >
    </fluent-breadcrumb>
  </div>
</template>

<script setup lang="ts">
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.breadcrumb-container {
  /* background-color: none; */
  /* padding: 0; */
  /* margin: 0; */
}
</style>
