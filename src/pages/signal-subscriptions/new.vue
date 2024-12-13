<template>
  <div>
    <div class="row">
      <label>User Id</label>
      <fluent-text-field
        required
        @input="userId = $event.target.value"
      ></fluent-text-field>
    </div>

    <div class="row">
      <label>Signal source Id</label>
      <fluent-text-field
        required
        @input="signalSourceId = $event.target.value"
      ></fluent-text-field>
    </div>

    <div class="row">
      <fluent-button
        :disabled="!userId || !signalSourceId"
        appearance="accent"
        @click="createSignalSubscription"
        >Create</fluent-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISignalSubscriptionService } from "~/resources/signal-subscriptions";

const signalSubscriptionService = useNuxtApp()
  .$signalSubscriptionService as ISignalSubscriptionService;

const userId = ref("");
const signalSourceId = ref("");

const createSignalSubscription = async () => {
  try {
    const createdResponse =
      await signalSubscriptionService.createSignalSubscription({
        userId: userId.value,
        signalSourceId: signalSourceId.value,
      });

    alert(`Signal subscription ${createdResponse.id} created`);
    navigateTo("/signal-subscriptions");
  } catch (error) {
    alert(`Failed to create signal subscription: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
