<template>
  <div>
    <h1>Nuxt Version: {{ app.versions.nuxt }}</h1>
    <h1>Vue Version: {{ app.versions.vue }}</h1>
  </div>
</template>

<script lang="ts" setup>
const app = useNuxtApp();
</script>
