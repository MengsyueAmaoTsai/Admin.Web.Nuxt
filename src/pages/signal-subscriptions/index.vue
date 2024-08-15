<template>
  <div>
    <h1>Signal subscriptions</h1>

    <div>
      <button @click="refreshData">Refresh</button>
    </div>
    <div v-if="subscriptions.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Source Id</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="subscription in subscriptions" :key="subscription.id">
          <td>{{ subscription.id }}</td>
          <td>{{ subscription.userId }}</td>
          <td>{{ subscription.sourceId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: subscriptions,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-subscriptions`
);

const refreshData = async () => {
  await refresh();
};
</script>

<style></style>
