<template>
  <h3>
    Total Signals: {{ signals.items.length }} Average Latency:
    {{ averageLatency }}
  </h3>
  <div v-for="signal in signals.items" :key="signal.id">{{ signal }}</div>
</template>

<script lang="ts" setup>
const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch("http://localhost:11000/api/v1/signals");
</script>
