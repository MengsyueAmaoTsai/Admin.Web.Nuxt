<template>
  <div>
    <h2>Instruments</h2>
    <div>
      <button @click="$router.push('/instruments/create')">
        New instrument
      </button>

      <button @click="refreshData">Refresh</button>
    </div>

    <div v-if="instruments.length === 0">No data</div>
    <table v-else>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="instrument in instruments" :key="instrument.symbol">
          <td>{{ instrument.symbol }}</td>
          <td>{{ instrument.description }}</td>
          <td>{{ instrument.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: instruments,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/instruments`);

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
