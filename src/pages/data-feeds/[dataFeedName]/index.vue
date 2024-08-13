<template>
  <div>
    <div v-if="!dataFeed">
      <p>Loading...</p>
    </div>

    <div v-else>
      <div>Name: {{ dataFeed.dataFeedName }}</div>

      <div>Status: {{ dataFeed.status }}</div>

      <div>
        Connected Time:
        {{ dataFeed.status === "Running" ? dataFeed.startedTime : "--" }}
      </div>

      <div>
        Request Latency:
        {{ dataFeed.requestLatency ?? 0 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const dataFeedName = route.params.dataFeedName;
const isStarting = ref(false);

const {
  data: dataFeed,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/${dataFeedName}`
);

const currentDataFeed = ref({ ...dataFeed.value });

console.log(currentDataFeed.value);

const startDataFeed = async () => {
  isStarting.value = true;

  try {
    const response = await fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataFeedName: dataFeedName }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to connect to data feed");
    }
    const result = await response.json();
    console.log("Connection successful:", result);
    // Optionally, you can refresh the dataFeed or handle success
    await refresh();
  } catch (error) {
    console.error("Failed to connect data feed:", error);
  } finally {
    isStarting.value = false;
  }
};

const stopDataFeed = async () => {
  isStarting.value = true;

  try {
    const response = await fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/stop`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataFeedName: dataFeedName }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to disconnect from data feed");
    }
    const result = await response.json();
    console.log("Disconnection successful:", result);
    // Optionally, you can refresh the dataFeed or handle success
    await refresh();
  } catch (error) {
    console.error("Failed to disconnect data feed:", error);
  } finally {
    isStarting.value = false;
  }
};

const restartDataFeed = async () => {
  isStarting.value = true;

  try {
    const response = await fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/restart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataFeedName: dataFeedName }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to restart data feed");
    }
    const result = await response.json();
    console.log("Restart successful:", result);
    // Optionally, you can refresh the dataFeed or handle success
    await refresh();
  } catch (error) {
    console.error("Failed to restart data feed:", error);
  } finally {
    isStarting.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
