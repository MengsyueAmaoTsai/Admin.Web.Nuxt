<template>
  <div>
    <fluent-breadcrumb>
      <fluent-breadcrumb-item href="/">Home</fluent-breadcrumb-item>
      <fluent-breadcrumb-item href="/signal-sources"
        >Signal Sources</fluent-breadcrumb-item
      >
      <!-- <fluent-breadcrumb-item>{{ signalSource.id }}</fluent-breadcrumb-item> -->
    </fluent-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const signalSourceId = ref(route.params.signalSourceId);

const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: signalSource,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServerOptions.baseAddress}/api/v1/signal-sources/${signalSourceId.value}`
);

console.log(signalSource);
</script>

<style></style>
