<template>
  <div>
    <h1>Data Feeds</h1>
    <ul>
      <li v-for="dataFeed in dataFeeds" :key="dataFeed.dataFeedName">
        <NuxtLink :to="`/data-feeds/${dataFeed.dataFeedName}`">
          {{ dataFeed.dataFeedName }}
        </NuxtLink>
        -
        {{ dataFeed.isConnected ? "Connected" : "Disconnected" }}
      </li>
    </ul>
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
</script>

<style lang="scss" scoped></style>
