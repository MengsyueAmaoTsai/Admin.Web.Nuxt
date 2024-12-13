<template>
  <div>
    <div>
      <fluent-button
        appearance="accent"
        @click="navigateTo('/signal-subscriptions/new')"
        >New signal subscription</fluent-button
      >
    </div>

    <Search></Search>

    <div>
      {{ signalSubscriptions.length }} signal subscription{{
        signalSubscriptions.length <= 1 ? "" : "s"
      }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>User Id</th>
          <th>Signal source Id</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="signalSubscriptions.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="subscription of signalSubscriptions">
          <td><input type="checkbox" /></td>
          <td>
            <a :href="`/signal-subscriptions/${subscription.id}`">
              {{ subscription.id }}
            </a>
          </td>
          <td>{{ subscription.userId }}</td>
          <td>{{ subscription.signalSourceId }}</td>
          <td>{{ subscription.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {
  ISignalSubscriptionService,
  SignalSubscriptionResponse,
} from "~/resources/signal-subscriptions";

const signalSubscriptionService = useNuxtApp()
  .$signalSubscriptionService as ISignalSubscriptionService;

const signalSubscriptions = ref<SignalSubscriptionResponse[]>([]);

onMounted(async () => {
  signalSubscriptions.value =
    await signalSubscriptionService.listSignalSubscriptions();
});
</script>
