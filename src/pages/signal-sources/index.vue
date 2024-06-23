<template>
  <div>
    <h2>Signal Sources</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="signalSource in signalSources.items" :key="signalSource.id">
          <td>
            <NuxtLink :to="`/signalSources/${signalSource.id}`">{{
              signalSource.id
            }}</NuxtLink>
          </td>
          <td>{{ signalSource.name }}</td>
          <td>{{ signalSource.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: signalSources,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServerOptions.baseAddress}/api/v1/signal-sources`
);
</script>
