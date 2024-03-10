<script setup lang="ts">
type BotResponse = {
  id: string;
  name: string;
  description: string;
  symbols: string[];
  side: string;
  platform: string;
  createdAt: Date;
  updatedAt: Date;
};

const botId = useRoute().params.id as string;
</script>

<template>
  <div>{{ botId }}</div>
</template>

<style scoped lang="scss"></style>
