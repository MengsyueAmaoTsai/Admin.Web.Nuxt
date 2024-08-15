<template>
  <div>
    <h1>Data Feeds</h1>

    <div>
      <button @click="startDataFeed">Start</button>
      <button @click="stopDataFeed">Stop</button>
      <button @click="restartDataFeed">Restart</button>
      <button @click="refreshData">Refresh</button>
    </div>

    <div v-if="dataFeeds.length === 0">No data feed</div>

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
          <th>Name</th>
          <th>Status</th>
          <th>Started time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dataFeed in dataFeeds" :key="dataFeed.dataFeedName">
          <td>
            <input
              type="checkbox"
              :value="dataFeed.dataFeedName"
              v-model="selectedDataFeedNames"
            />
          </td>
          <td>
            <NuxtLink :to="`/data-feeds/${dataFeed.dataFeedName}`">{{
              dataFeed.dataFeedName
            }}</NuxtLink>
          </td>

          <td>{{ dataFeed.status }}</td>

          <td>
            {{ dataFeed.status === "Running" ? dataFeed.startedTime : "--" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const selectedDataFeedNames = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: dataFeeds,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/data-feeds`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedDataFeedNames.value = dataFeeds.value.map(
      (dataFeed) => dataFeed.dataFeedName
    );
  } else {
    selectedDataFeedNames.value = [];
  }
};

const startDataFeed = async () => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/start`,
      {
        method: "POST",
        body: {
          dataFeedName: "Max",
        },
      }
    );

    await refresh();
  } catch (err) {
    console.error("Error starting data feed:", err);
  }
};

const stopDataFeed = async () => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/stop`,
      {
        method: "POST",
        body: {
          dataFeedName: "Max",
        },
      }
    );

    await refresh();
  } catch (err) {
    console.error("Error stopping data feed:", err);
  }
};

const restartDataFeed = async () => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/restart`,
      {
        method: "POST",
        body: {
          dataFeedName: "Max",
        },
      }
    );

    await refresh();
  } catch (err) {
    console.error("Error restarting data feed:", err);
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
