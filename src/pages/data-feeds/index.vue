<template>
  <div>
    <h1>Data Feeds</h1>

    <button>Start all</button>
    <button>Stop all</button>
    <button>Restart all</button>

    <table>
      <thead>
        <tr>
          <th>Data Feed Name</th>
          <th>Status</th>
          <th>Started Time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="dataFeed in dataFeeds" :key="dataFeed.dataFeedName">
          <td>{{ dataFeed.dataFeedName }}</td>
          <td>{{ dataFeed.status }}</td>
          <td>
            {{ dataFeed.status === "Running" ? dataFeed.startedTime : "--" }}
          </td>
          <td>
            {{
              dataFeed.status === "Running" && dataFeed.requestLatency
                ? dataFeed.requestLatency
                : 0
            }}
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

console.log(dataFeeds);
</script>

<style lang="scss" scoped></style>
