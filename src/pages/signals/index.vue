<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <h2>{{ pageTitle }}</h2>

    <div class="toolbar-signals">
      <button>Refresh</button>
      <button>Download as CSV</button>
    </div>

    <div class="status-message">StatusMessage</div>

    <div>
      <input type="text" placeholder="Search" />
    </div>

    <div>0 items.</div>

    <div>
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
            <th>Latency</th>
          </tr>
        </thead>

        <div v-if="signals.items.length === 0">No results to display</div>

        <tbody v-else>
          <tr v-for="signal in signals.items" :key="signal.id">
            <td>{{ signal.id }}</td>
            <td>{{ signal.sourceId }}</td>
            <td>{{ signal.time }}</td>
            <td>{{ signal.exchange }}</td>
            <td>{{ signal.symbol }}</td>
            <td>{{ signal.quantity }}</td>
            <td>{{ signal.price }}</td>
            <td>{{ signal.latency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const pageTitle = "Signals";

const breadcrumbs = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: pageTitle,
    path: "#",
  },
];

const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/signals`);
</script>

<style></style>
