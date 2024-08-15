<template>
  <div>
    <h1>Signal Sources</h1>

    <div>
      <button @click="$router.push('/signal-sources/create')">
        New signal source
      </button>
      <button @click="publishSignalSource">Publish</button>
      <button @click="unpublishSignalSource">Unpublish</button>
      <button @click="refreshData">Refresh</button>
    </div>

    <div v-if="signalSources.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
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
const createSignalSourceRequest = ref({ id: "", name: "", description: "" });

const {
  data: signalSources,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`
);

const createSignalSource = async () => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`,
      {
        method: "POST",
        body: createSignalSourceRequest.value,
      }
    );

    createSignalSourceRequest.value = { id: "", name: "", description: "" };
    newSignalSourceFormVisible.value = false;

    await refresh();
  } catch (err) {
    console.error("Error adding user:", err);
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

const unpublishSignalSource = async (signalSourceId: string) => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources/${signalSourceId}/unpublish`,
      {
        method: "POST",
      }
    );

    await refresh();
  } catch (err) {
    console.error("Error unpublishing signal source:", err);
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
