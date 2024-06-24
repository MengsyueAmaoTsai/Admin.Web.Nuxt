<template>
  <div>
    <fluent-breadcrumb>
      <fluent-breadcrumb-item href="/">Home</fluent-breadcrumb-item>
      <fluent-breadcrumb-item href="/signal-sources"
        >Signal Sources</fluent-breadcrumb-item
      ><fluent-breadcrumb-item>{{ signalSource.id }}</fluent-breadcrumb-item>
    </fluent-breadcrumb>

    <fluent-card class="signal-source-profile">
      <h2>
        {{ signalSource.name }} <small>({{ signalSource.id }})</small>
      </h2>
      <p>{{ signalSource.description }}</p>
    </fluent-card>

    <fluent-card>
      <h3>Signals</h3>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Exchange</th>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Latency</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </fluent-card>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const signalSourceId = ref(route.params.signalSourceId);

const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: signalSource,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServerOptions.baseAddress}/api/v1/signal-sources/${signalSourceId.value}`
);

console.log(signalSource);
</script>

<style></style>
