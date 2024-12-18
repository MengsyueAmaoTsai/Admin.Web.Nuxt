<template>
  <div>
    <fluent-button appearance="accent" @click="navigateTo('/snapshots')"
      >Back to list</fluent-button
    >

    <div v-if="snapshot">
      <div class="row">
        <div>Id</div>
        <div>{{ snapshot.id }}</div>
      </div>
      <div class="row">
        <div>Signal source Id</div>
        <div>{{ snapshot.signalSourceId }}</div>
      </div>

      <div class="row">
        <div>time</div>
        <div>{{ snapshot.time }}</div>
      </div>

      <div class="row">
        <div>latency</div>
        <div>{{ snapshot.latency }}</div>
      </div>

      <div class="row">
        <div>Symbol</div>
        <div>{{ snapshot.symbol }}</div>
      </div>

      <div class="row">
        <div>Bar time</div>
        <div>{{ snapshot.barTime }}</div>
      </div>

      <div class="row">
        <div>Last price</div>
        <div>{{ snapshot.lastPrice }}</div>
      </div>

      <div class="row">
        <div>Message</div>
        <div>{{ !snapshot.message ? "No message" : snapshot.message }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ snapshot.createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISnapshotService,
  SnapshotDetailsResponse,
} from "~/resources/snapshots";

const route = useRoute();
const snapshotId = ref<string>(route.params.snapshotId as string);

const snapshotService = useNuxtApp().$snapshotService as ISnapshotService;

const snapshot = ref<SnapshotDetailsResponse | null>(null);

onMounted(async () => {
  snapshot.value = await snapshotService.getSnapshot(snapshotId.value);
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
