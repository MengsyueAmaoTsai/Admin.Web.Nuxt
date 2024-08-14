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
          <th>Name</th>
          <th>Status</th>
          <th>Started time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dataFeed in dataFeeds" :key="dataFeed.id">
          <td>{{ dataFeed.dataFeedName }}</td>

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

const {
  data: dataFeeds,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/data-feeds`);

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
