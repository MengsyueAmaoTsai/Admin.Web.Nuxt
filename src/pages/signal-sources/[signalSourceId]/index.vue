<template>
  <div>
    <Button @click="navigateTo('/signal-sources')">Back to list</Button>

    <div v-if="account">
      <div class="row">
        <div>Id</div>
        <div>{{ account.id }}</div>
      </div>

      <div class="row">
        <div>Name</div>
        <div>{{ account.name }}</div>
      </div>

      <div class="row">
        <div>Description</div>
        <div>{{ account.description }}</div>
      </div>

      <div class="row">
        <div>Version</div>
        <div>{{ account.version }}</div>
      </div>

      <div class="row">
        <div>Stage</div>
        <div>{{ account.stage }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ account.createdTime }}</div>
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

const account = ref<SignalSourceDetailsResponse | null>(null);

onMounted(async () => {
  account.value = await signalSourceService.getSignalSource(
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
