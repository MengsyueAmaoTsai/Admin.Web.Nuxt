<template>
  <div>
    <button></button>
    <h1>Data Feed Details</h1>

    <div v-if="dataFeed">
      <p><strong>Name:</strong> {{ dataFeed.dataFeedName }}</p>
      <p>
        <strong>Status:</strong>
        {{ dataFeed.status }}

        <button @click="connectDataFeed" :disabled="isConnecting">
          {{ isConnecting ? "Connecting..." : "Connect" }}
        </button>
      </p>

      <p>
        <strong>Connected Time</strong>
        <div>{{ dataFeed.connectedTime }}</div>
      </p>
      
      <p>
        <strong>Request Latency</strong>
        <div>{{ dataFeed.requestLatency }}</div>
      </p>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const dataFeedName = route.params.dataFeedName;
const isConnecting = ref(false);
const connectionError = ref<string | null>(null);

const {
  data: dataFeed,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/${dataFeedName}`
);

const currentDataFeed = ref({ ...dataFeed.value });

const connectDataFeed = async () => {
  isConnecting.value = true;
  connectionError.value = null;
  try {
    const response = await fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/data-feeds/connect`,
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
  } catch (err) {
    connectionError.value = err.message;
    console.error("Failed to connect data feed:", connectionError.value);
  } finally {
    isConnecting.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
