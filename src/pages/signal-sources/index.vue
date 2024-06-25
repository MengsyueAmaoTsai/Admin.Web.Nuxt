<template>
  <fluent-breadcrumb>
    <fluent-breadcrumb-item href="/">Home</fluent-breadcrumb-item>
    <fluent-breadcrumb-item>Signal Sources</fluent-breadcrumb-item>
  </fluent-breadcrumb>
  <div>
    <div class="header">
      <h2>Signal Sources</h2>
      <fluent-button appearance="outline">X</fluent-button>
    </div>

    <div class="toolbar">
      <fluent-button appearance="accent">Create</fluent-button>
      <fluent-button appearance="accent">Refresh</fluent-button>
      <fluent-button appearance="accent">Export to CSV</fluent-button>
    </div>

    <div class="table-view">
      <table>
        <thead>
          <tr>
            <th>
              <fluent-checkbox></fluent-checkbox>
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="signalSource in signalSources.items"
            :key="signalSource.id"
          >
            <td>
              <fluent-checkbox></fluent-checkbox>
            </td>
            <td>
              <NuxtLink :to="`/signal-sources/${signalSource.id}`">{{
                signalSource.id
              }}</NuxtLink>
            </td>
            <td>{{ signalSource.name }}</td>
            <td>{{ signalSource.description }}</td>
            <td>
              <fluent-button appearance="outline">...</fluent-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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

<style scoped lang="css">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
