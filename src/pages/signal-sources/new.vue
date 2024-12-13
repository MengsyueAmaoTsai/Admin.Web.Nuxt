<template>
  <div>
    <div class="row">
      <label>Id</label>
      <fluent-text-field
        required
        @input="id = $event.target.value"
      ></fluent-text-field>
    </div>

    <div class="row">
      <label>Name</label>
      <fluent-text-field
        required
        @input="name = $event.target.value"
      ></fluent-text-field>
    </div>

    <div class="row">
      <label>Description</label>
      <fluent-text-field required @input="description = $event.target.value">
      </fluent-text-field>
    </div>

    <div class="row">
      <label>Version</label>
      <input type="text" v-model="version" />
    </div>

    <div class="row">
      <label>Stage</label>
      <input type="text" v-model="stage" />
    </div>

    <div class="row">
      <fluent-button
        :disabled="!id || !name || !description"
        appearance="accent"
        @click="createSignalSource"
        >Create</fluent-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISignalSourceService } from "~/resources/signal-sources";

const signalSourceService = useNuxtApp()
  .$signalSourceService as ISignalSourceService;

const id = ref("");
const name = ref("");
const description = ref("");
const version = ref("");
const stage = ref("");

const createSignalSource = async () => {
  try {
    const createdResponse = await signalSourceService.createSignalSource({
      id: id.value,
      name: name.value,
      description: description.value,
      version: version.value,
      stage: stage.value,
    });

    alert(`Signal source ${createdResponse.id} created`);
    navigateTo("/signal-sources");
  } catch (error) {
    alert(`Failed to create signal source: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
