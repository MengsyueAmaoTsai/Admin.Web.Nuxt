<template>
  <div>
    <h1>Signal Sources</h1>

    <div>
      <button @click="$router.push('/signal-sources/create')">
        New signal source
      </button>
      <button @click="publishSignalSource">Publish</button>
      <button @click="refreshData">Refresh</button>
    </div>

    <div v-if="signalSources.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="selectAll"
              @change="selectOrUnselectAll"
            />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Published</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="signalSource in signalSources" :key="signalSource.id">
          <td>
            <input
              type="checkbox"
              :value="signalSource.id"
              v-model="selectedSourceIds"
            />
          </td>
          <td>
            <NuxtLink :to="`signal-sources/${signalSource.id}`">{{
              signalSource.id
            }}</NuxtLink>
          </td>
          <td>
            <NuxtLink :to="`signal-sources/${signalSource.id}`">{{
              signalSource.name
            }}</NuxtLink>
          </td>
          <td>{{ signalSource.description }}</td>
          <td>{{ signalSource.isPublished }}</td>
          <td>{{ signalSource.createdTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const selectedSourceIds = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: signalSources,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`
);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedSourceIds.value = signalSources.value.map(
      (signalSource) => signalSource.id
    );
  } else {
    selectedSourceIds.value = [];
  }
};

const publishSignalSource = async (signalSourceId: string) => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources/${signalSourceId}/publish`,
      {
        method: "POST",
      }
    );

    await refresh();
  } catch (err) {
    console.error("Error publishing signal source:", err);
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
