<template>
  <div>
    <h2>Accounts</h2>
  </div>

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
      <tr v-for="signal in signals.items" :key="account.id">
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
</template>

<script lang="ts" setup>
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/signals`);
</script>

<style></style>
