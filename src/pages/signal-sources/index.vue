<template>
  <div>
    <div>
      <fluent-button
        appearance="accent"
        @click="navigateTo('/signal-sources/new')"
        >New signal source</fluent-button
      >
    </div>

    <div>
      {{ signalSources.length }} signal source{{
        signalSources.length <= 1 ? "" : "s"
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
          <th>Name</th>
          <th>Description</th>
          <th>Version</th>
          <th>Stage</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="signalSources.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="source of signalSources">
          <td><input type="checkbox" /></td>
          <td>
            <a :href="`/signal-sources/${source.id}/overview`">
              {{ source.id }}
            </a>
          </td>
          <td>{{ source.name }}</td>

          <td>{{ source.description }}</td>
          <td>{{ source.version }}</td>
          <td>{{ source.stage }}</td>
          <td>{{ source.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {
  ISignalSourceService,
  SignalSourceResponse,
} from "~/resources/signal-sources";

const signalSourceService = useNuxtApp()
  .$signalSourceService as ISignalSourceService;

const signalSources = ref<SignalSourceResponse[]>([]);

onMounted(async () => {
  signalSources.value = await signalSourceService.listSignalSources();
});
</script>
