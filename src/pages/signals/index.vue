<template>
  <h3>
    Total Signals: {{ signals.items.length }} Average Latency:
    {{ averageLatency }} seconds
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
const averageLatency = computed(() => {
  if (!signals.value || signals.value.items.length === 0) {
    return (0).toFixed(3);
  }
  const totalLatency = signals.value.items.reduce(
    (sum, signal) => sum + signal.latency,
    0
  );
  const averageLatencyInMs = totalLatency / signals.value.items.length;
  const averageLatencyInSeconds = averageLatencyInMs / 1000;
  return averageLatencyInSeconds.toFixed(3);
});
</script>
