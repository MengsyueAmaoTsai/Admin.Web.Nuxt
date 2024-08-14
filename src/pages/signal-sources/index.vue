<template>
  <div>
    <h1>Signal Sources</h1>

    <div>
      <button @click="newSignalSourceFormVisible = true">
        New signal source
      </button>
      <button @click="refreshData">Refresh</button>
    </div>
    <!-- New user form -->
    <div v-if="newSignalSourceFormVisible">
      <h2>New signal source</h2>

      <form @submit.prevent="createSignalSource">
        <div>
          <label for="name">Id</label>
          <input type="text" v-model="createSignalSourceRequest.id" />
        </div>

        <div>
          <label for="name">Name</label>
          <input type="text" v-model="createSignalSourceRequest.name" />
        </div>

        <div>
          <label for="description">Description</label>
          <input type="text" v-model="createSignalSourceRequest.description" />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button type="button" @click="newSignalSourceFormVisible = false">
            Cancel
          </button>
        </div>
      </form>
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
const newSignalSourceFormVisible = ref(false);
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

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
