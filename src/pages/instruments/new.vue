<template>
  <div>
    <div class="row">
      <label>Symbol</label>
      <fluent-text-field
        required
        @input="symbol = $event.target.value"
      ></fluent-text-field>
    </div>
    <div class="row">
      <label>Description</label>
      <fluent-text-field
        required
        @input="description = $event.target.value"
      ></fluent-text-field>
    </div>
    <div class="row">
      <label>Type</label>
      <fluent-select @change="type = $event.target.value">
        <fluent-option
          v-for="option in typeOptions"
          :key="option"
          :value="option"
          >{{ option }}</fluent-option
        >
      </fluent-select>
    </div>

    <div class="row">
      <fluent-button
        :disabled="!symbol || !description || !type || isBusy"
        appearance="accent"
        @click="createInstrument"
        >Create</fluent-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IInstrumentService } from "~/resources/instruments";

const instrumentService = useNuxtApp().$instrumentService as IInstrumentService;
const isBusy = ref(false);
const typeOptions = ref([
  "Index",
  "CryptoCurrency",
  "Future",
  "Option",
  "Swap",
  "Forward",
  "MutualFund",
]);

const symbol = ref("");
const description = ref("");
const type = ref(typeOptions.value[0]);

const createInstrument = async () => {
  isBusy.value = true;
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
  } finally {
    isBusy.value = false;
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
