<template>
  <div><button @click="refreshPage">Refresh</button></div>

  <div>
    <input type="text" placeholder="Search properties" />
  </div>

  <div>
    <label>Name</label>
    <input type="text" v-model="signalSource.name" />
  </div>

  <div>
    <label>Description</label>
    <input type="text" v-model="signalSource.description" />
  </div>

  <div class="edit-properties">
    <button @click="save">Save</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const signalSourceId = route.params.signalSourceId;

const {
  data: signalSource,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-sources/${signalSourceId}`
);

const currentSignalSource = ref({ ...signalSource.value });

async function refreshPage() {
  currentSignalSource.value = { ...signalSource.value };
  await refresh();
}

async function save() {
  try {
    const response = await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources/${signalSourceId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { ...currentSignalSource.value },
      }
    );

    router.push(`/signal-sources/${signalSourceId}`);
  } catch (error) {
    console.error(error);
  }
}

function cancel() {
  router.push(`/signal-sources/${signalSourceId}`);
}
</script>

<style lang="scss" scoped></style>
