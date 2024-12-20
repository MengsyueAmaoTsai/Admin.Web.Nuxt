<template>
  <div>
    <h2>Basic</h2>

    <div class="row">
      <label>Id</label>
      <TextField v-model="id" placeholder="Signal source Id"></TextField>
    </div>

    <div class="row">
      <label>Name</label>
      <TextField v-model="name" placeholder="Signal source name"></TextField>
    </div>

    <div class="row">
      <label>Description</label>
      <TextField v-model="description" placeholder="Description"></TextField>
    </div>

    <div class="row">
      <label>Version</label>
      <NumberField v-model="versionMajor"></NumberField>
      <NumberField v-model="versionMinor"></NumberField>
      <NumberField v-model="versionPatch"></NumberField>
    </div>

    <div class="row">
      <label>Stage</label>
      <select v-model="stage" required>
        <option v-for="option in stageOptions" :value="option.value">
          {{ option.label }}
        </option>
      </select>
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

enum StageOptions {
  Development = "Development",
  BackTesting = "BackTesting",
  Simulation = "Simulation",
  Production = "Production",
  Paused = "Paused",
  Deprecated = "Deprecated",
}

const stageOptions = [
  { label: "Development", value: StageOptions.Development },
  { label: "Back testing", value: StageOptions.BackTesting },
  { label: "Simulation", value: StageOptions.Simulation },
  { label: "Production", value: StageOptions.Production },
  { label: "Paused", value: StageOptions.Paused },
  { label: "Deprecated", value: StageOptions.Deprecated },
];

const signalSourceService = useNuxtApp()
  .$signalSourceService as ISignalSourceService;

const id = ref("");
const name = ref("");
const description = ref("");
const versionMajor = ref(0);
const versionMinor = ref(0);
const versionPatch = ref(1);
const stage = ref("");

const createSignalSource = async () => {
  try {
    const createdResponse = await signalSourceService.createSignalSource({
      id: id.value,
      name: name.value,
      description: description.value,
      version: `${versionMajor.value}.${versionMinor.value}.${versionPatch.value}`,
      stage: stage.value,
    });

    alert(`Signal source ${createdResponse.id} created`);
    navigateTo("/signal-sources");
  } catch (error) {
    alert(`Failed to create signal source: ${error}`);
  }
};

onMounted(() => {
  stage.value = StageOptions.Development;
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
