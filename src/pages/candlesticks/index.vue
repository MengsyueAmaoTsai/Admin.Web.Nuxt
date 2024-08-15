<template>
  <div>
    <h1>Candlesticks</h1>

    <div class="toolbar">
      <button @click="createCandlestick">Create</button>
      <button @click="refreshCandlesticks">Refresh</button>
      <button @click="exportToCsv">Export to CSV</button>
    </div>

    <div v-if="candlesticks.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>Time</th>
          <th>Symbol</th>
          <th>Interval</th>
          <th>Period</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="candlestick in candlesticks">
          <td>{{ candlestick.time }}</td>
          <td>{{ candlestick.symbol }}</td>
          <td>{{ candlestick.interval }}</td>
          <td>{{ candlestick.period }}</td>
          <td>{{ candlestick.open }}</td>
          <td>{{ candlestick.high }}</td>
          <td>{{ candlestick.low }}</td>
          <td>{{ candlestick.close }}</td>
          <td>{{ candlestick.volume }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: candlesticks,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/candlesticks?symbol=MAX:BTCUSDT&start=2021-01-01T00:00:00Z&end=2021-01-02T00:00:00Z&interval=1&period=Minute`
);

console.log(candlesticks.value);

const createCandlestick = async () => {
  console.log("Creating candlestick...");
};

const refreshCandlesticks = async () => {
  await refresh();
};

const exportToCsv = async () => {
  console.log("Exporting to CSV...");
};
</script>

<style></style>
