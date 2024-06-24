<template>
  <div>
    <fluent-breadcrumb>
      <fluent-breadcrumb-item href="/">Home</fluent-breadcrumb-item>
      <fluent-breadcrumb-item>Signals</fluent-breadcrumb-item>
    </fluent-breadcrumb>

    <h2>Signals</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Source Id</th>
          <th>Time</th>
          <th>Exchange</th>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="signal in signals.items" :key="signal.id">
          <td>{{ signal.id }}</td>
          <td>{{ signal.sourceId }}</td>
          <td>{{ signal.time }}</td>
          <td>{{ signal.exchange }}</td>
          <td>{{ signal.symbol }}</td>
          <td>{{ signal.quantity }}</td>
          <td>{{ signal.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/signals`);

console.log(signals);
</script>

<style></style>
