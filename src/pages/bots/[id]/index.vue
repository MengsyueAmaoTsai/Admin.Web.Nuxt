<script setup lang="ts">
const botId = useRoute().params.id;
console.log(botId);
</script>

<template>
  <div>{{ botId }}</div>
</template>

<style scoped lang="scss"></style>
