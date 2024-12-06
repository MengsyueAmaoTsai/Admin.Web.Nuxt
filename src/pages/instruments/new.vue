<template>
  <div>
    <div class="row">
      <label>Symbol</label>
      <input type="text" v-model="symbol" />
    </div>
    <div class="row">
      <label>Description</label>
      <input type="text" v-model="description" />
    </div>
    <div class="row">
      <label>Type</label>
      <input type="text" v-model="type" />
    </div>

    <div class="row">
      <Button @click="createUser">Create</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IInstrumentService } from "~/resources/instruments";

const instrumentService = useNuxtApp().$instrumentService as IInstrumentService;

const symbol = ref("");
const description = ref("");
const type = ref("");

const createUser = async () => {
  try {
    const createdResponse = await instrumentService.createInstrument({
      symbol: symbol.value,
      description: description.value,
      type: type.value,
    });

    alert(`Instrument ${createdResponse.id} created`);
    navigateTo("/instruments");
  } catch (error) {
    alert(`Failed to create instrument: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
