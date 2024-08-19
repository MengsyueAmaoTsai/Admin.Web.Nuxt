<template>
  <div>
    <h1>Trading apps</h1>

    <div>
      <button @click="$router.push('/trading-apps/create')">
        New trading app
      </button>
      <button
        @click="console.log(selectedAppIds)"
        :disabled="selectedAppIds.length === 0"
      >
        Delete
      </button>
      <button @click="refreshData">Refresh</button>
    </div>

    <!-- User data -->
    <div v-if="apps.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="selectAll"
              @change="selectOrUnselectAll"
            />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in apps" :key="app.id">
          <td>
            <input type="checkbox" :value="app.id" v-model="selectedAppIds" />
          </td>

          <td>
            <NuxtLink :to="`trading-apps/${app.id}`">{{ app.id }}</NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`trading-apps/${app.id}`">{{ app.name }}</NuxtLink>
          </td>

          <td>
            {{ app.description }}
          </td>

          <td>{{ app.category }}</td>

          <td>
            {{ app.createdTime }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const selectedAppIds = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: apps,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/trading-apps`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedAppIds.value = apps.value.map((app) => app.id);
  } else {
    selectedAppIds.value = [];
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
