<template>
  <div>
    <div>
      <Button @click="navigateTo('/instruments/new')">New instrument</Button>
    </div>

    <Search></Search>

    <div>
      {{ instruments.length }} instrument{{
        instruments.length <= 1 ? "" : "s"
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
          <th>Symbol</th>
          <th>Description</th>
          <th>Type</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="instruments.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="instrument of instruments">
          <td><input type="checkbox" /></td>
          <td>{{ instrument.id }}</td>
          <td>
            <a :href="`/instruments/${instrument.symbol}`">
              {{ instrument.symbol }}
            </a>
          </td>
          <td>{{ instrument.description }}</td>
          <td>{{ instrument.type }}</td>
          <td>{{ instrument.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {
  IInstrumentService,
  InstrumentResponse,
} from "~/resources/instruments";

const instrumentService = useNuxtApp().$instrumentService as IInstrumentService;

const instruments = ref<InstrumentResponse[]>([]);

onMounted(async () => {
  const responses = await instrumentService.listInstruments();
  instruments.value = responses;
});
</script>
