<template>
  <div>
    <fluent-button appearance="accent" @click="navigateTo('/instruments')"
      >Back to list</fluent-button
    >

    <div v-if="instrument">
      <div class="row">
        <div>Id</div>
        <div>{{ instrument.id }}</div>
      </div>

      <div class="row">
        <div>Symbol</div>
        <div>{{ instrument.symbol }}</div>
      </div>

      <div class="row">
        <div>Description</div>
        <div>{{ instrument.description }}</div>
      </div>

      <div class="row">
        <div>Type</div>
        <div>{{ instrument.type }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ instrument.createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IInstrumentService,
  InstrumentDetailsResponse,
} from "~/resources/instruments";

const route = useRoute();
const symbol = ref<string>(route.params.symbol as string);

const instrumentService = useNuxtApp().$instrumentService as IInstrumentService;

const instrument = ref<InstrumentDetailsResponse | null>(null);

onMounted(async () => {
  instrument.value = await instrumentService.getInstrument(symbol.value);
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
