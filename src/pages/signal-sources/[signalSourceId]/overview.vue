<template>
  <div>
    <fluent-button appearance="accent" @click="navigateTo('/signal-sources')"
      >Back to list</fluent-button
    >

    <!-- Essentials (Use accordion) -->
    <div style="display: flex; flex-direction: column">
      <label>Id</label>
      <label>{{ signalSource?.id }}</label>
    </div>

    <div style="display: flex; flex-direction: column">
      <label>Name</label>
      <label>{{ signalSource?.name }}</label>
    </div>

    <div style="display: flex; flex-direction: column">
      <label>Description</label>
      <label>{{ signalSource?.description }}</label>
    </div>

    <div style="display: flex; flex-direction: column">
      <label>Version</label>
      <label>{{ signalSource?.version }}</label>
    </div>

    <div style="display: flex; flex-direction: column">
      <label>Stage</label>
      <label>{{ signalSource?.stage }}</label>
    </div>

    <div style="display: flex; flex-direction: column">
      <label>Time created</label>
      <label>{{ signalSource?.createdTime.toLocaleString() }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISignalSourceService,
  SignalSourceDetailsResponse,
} from "~/resources/signal-sources";

const route = useRoute();
const signalSourceId = ref<string>(route.params.signalSourceId as string);

const signalSourceService = useNuxtApp()
  .$signalSourceService as ISignalSourceService;

const signalSource = ref<SignalSourceDetailsResponse | null>(null);

onMounted(async () => {
  signalSource.value = await signalSourceService.getSignalSource(
    signalSourceId.value
  );
});
</script>

<style scoped lang="scss"></style>
