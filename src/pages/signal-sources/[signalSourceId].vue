<template>
  <div>{{ source.name }} ({{ source.id }})</div>
  <p>{{ source.description }}</p>

  <div>Signal Count: {{ source.signals.length }}</div>
  <div>Average Latency: {{ averageLatency }} s</div>
  <br />
  <div>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Exchange</th>
          <th>Symbol</th>
          <th>Latency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="signal in source.signals">
          <td>{{ signal.time }}</td>
          <td>{{ signal.exchange }}</td>
          <td>{{ signal.symbol }}</td>
          <td>{{ (signal.latency / 1000).toFixed(3) }}/s</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.signalSourceId;

const {
  data: source,
  error,
  execute,
  refresh,
} = await useFetch(`http://localhost:11000/api/v1/signal-sources/${id}`);

const averageLatency = computed(() => {
  if (!source.value || source.value.signals.length === 0) {
    return (0).toFixed(3);
  }
  const totalLatency = source.value.signals.reduce(
    (sum, signal) => sum + signal.latency,
    0
  );
  const averageLatencyInMs = totalLatency / source.value.signals.length;
  const averageLatencyInSeconds = averageLatencyInMs / 1000;
  return averageLatencyInSeconds.toFixed(3);
});
</script>
