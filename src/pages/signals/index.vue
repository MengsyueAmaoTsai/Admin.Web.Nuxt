<template>
  <div>
    <h1>Signals</h1>

    <div>
      <button @click="$router.push('/signals/create')">New signal</button>
      <button
        @click="console.log(selectedSignalIds)"
        :disabled="selectedSignalIds.length === 0"
      >
        Delete
      </button>
      <button @click="refreshData">Refresh</button>
    </div>

    <!-- User data -->
    <div v-if="signals.length === 0">No data</div>

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
          <th>Time</th>
          <th>Symbol</th>
          <th>Latency</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="signal in signals" :key="signal.id">
          <td>
            <input
              type="checkbox"
              :value="signal.id"
              v-model="selectedSignalIds"
            />
          </td>
          <td>
            <NuxtLink :to="`signals/${signal.id}`">{{ signal.id }}</NuxtLink>
          </td>
          <td>
            {{ signal.time }}
          </td>
          <td>
            <NuxtLink :to="`instruments/${signal.symbol}`">{{
              signal.symbol
            }}</NuxtLink>
          </td>
          <td>
            {{ signal.latency }}
          </td>
          <td>
            {{ signal.createdTime }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const selectedSignalIds = ref<string[]>([]);

const selectAll = ref(false);

const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/signals`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedSignalIds.value = signals.value.map((user) => user.id);
  } else {
    selectedSignalIds.value = [];
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
