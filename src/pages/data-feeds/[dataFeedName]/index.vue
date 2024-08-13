<template>
  <div>
    <div class="toolbar">
      <button>Start</button>
      <button>Stop</button>
      <button>Restart</button>
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
const isProcessing = ref(false);

const {
  data: dataFeed,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/${dataFeedName}`
);

const startDataFeed = () => {
  console.log("Start data feed");
};
const stopDataFeed = () => {
  console.log("Stop data feed");
};
const restartDataFeed = () => {
  console.log("Restart data feed");
};
const refreshDataFeed = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
