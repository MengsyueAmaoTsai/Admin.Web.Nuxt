<template>
  <div>
    <fluent-button appearance="accent" @click="navigateTo('/signal-sources')"
      >Back to list</fluent-button
    >

    <div v-if="signalSource">
      <div class="row">
        <div>Id</div>
        <div>{{ signalSource.id }}</div>
      </div>

      <div class="row">
        <div>Name</div>
        <div>{{ signalSource.name }}</div>
      </div>

      <div class="row">
        <div>Description</div>
        <div>{{ signalSource.description }}</div>
      </div>

      <div class="row">
        <div>Version</div>
        <div>{{ signalSource.version }}</div>
      </div>

      <div class="row">
        <div>Stage</div>
        <div>{{ signalSource.stage }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ signalSource.createdTime }}</div>
      </div>
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

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
