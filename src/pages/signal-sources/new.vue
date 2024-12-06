<template>
  <div>
    <div class="row">
      <label>Id</label>
      <input type="text" v-model="id" />
    </div>

    <div class="row">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>

    <div class="row">
      <label>Description</label>
      <input type="text" v-model="description" />
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
      <Button @click="createUser">Create</Button>
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

const createUser = async () => {
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
