<template>
  <div>
    <div class="toolbar">
      <button @click="startDataFeed">Start</button>
      <button @click="stopDataFeed">Stop</button>
      <button @click="restartDataFeed">Restart</button>
      <button @click="refreshDataFeed">Refresh</button>
    </div>

    <div class="essentials-items-container">
      <div class="essentials-item">
        <div class="essentials-item-label">
          <label>Name</label>
        </div>
        <div class="essentials-item-value">{{ dataFeed.dataFeedName }}</div>
      </div>

      <div class="essentials-item">
        <div class="essentials-item-label">
          <label>Status</label>
        </div>
        <div class="essentials-item-value">{{ dataFeed.status }}</div>
      </div>

      <div class="essentials-item">
        <div class="essentials-item-label">
          <label>Started at</label>
        </div>
        <div class="essentials-item-value">
          {{ dataFeed.status === "Running" ? dataFeed.startedTime : "--" }} UTC
        </div>
      </div>

      <div class="essentials-item">
        <div class="essentials-item-label">
          <label>Request Latency</label>
        </div>
        <div class="essentials-item-value">
          {{
            dataFeed.status === "Running" && dataFeed.requestLatency
              ? dataFeed.requestLatency
              : 0
          }}
          ms
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const dataFeedName = route.params.dataFeedName;

const {
  data: dataFeed,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/${dataFeedName}`
);

const startDataFeed = async () => {
  const { data: responseData } = await useFetch(
    `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/start`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { dataFeedName: dataFeedName },
    }
  );
  console.log(responseData);
  await refresh();
};
const stopDataFeed = async () => {
  console.log("Stop data feed");
  const { data: responseData } = await useFetch(
    `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/stop`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { dataFeedName: dataFeedName },
    }
  );
  console.log(responseData);
  await refresh();
};
const restartDataFeed = async () => {
  console.log("Restart data feed");

  const { data: responseData } = await useFetch(
    `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/restart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { dataFeedName: dataFeedName },
    }
  );
  console.log(responseData);
  await refresh();
};
const refreshDataFeed = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
