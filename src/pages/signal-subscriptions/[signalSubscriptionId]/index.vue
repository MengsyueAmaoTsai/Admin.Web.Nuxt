<template>
  <div>
    <fluent-button
      appearance="accent"
      @click="navigateTo('/signal-subscriptions')"
      >Back to list</fluent-button
    >

    <div v-if="signalSubscription">
      <div class="row">
        <div>Id</div>
        <div>{{ signalSubscription.id }}</div>
      </div>

      <div class="row">
        <div>User Id</div>
        <div>{{ signalSubscription.userId }}</div>
      </div>

      <div class="row">
        <div>Signal source Id</div>
        <div>{{ signalSubscription.signalSourceId }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ signalSubscription.createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISignalSubscriptionService,
  SignalSubscriptionDetailsResponse,
} from "~/resources/signal-subscriptions";

const route = useRoute();
const signalSubscriptionId = ref<string>(
  route.params.signalSubscriptionId as string
);

const signalSubscriptionService = useNuxtApp()
  .$signalSubscriptionService as ISignalSubscriptionService;

const signalSubscription = ref<SignalSubscriptionDetailsResponse | null>(null);

onMounted(async () => {
  signalSubscription.value =
    await signalSubscriptionService.getSignalSubscription(
      signalSubscriptionId.value
    );
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
