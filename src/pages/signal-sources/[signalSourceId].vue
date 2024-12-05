<template>
  <div>
    <div v-if="signalSource" class="user-details">
      <p>Id: {{ signalSource.id }}</p>
      <p>Name: {{ signalSource.name }}</p>
      <p>Description: {{ signalSource.description }}</p>
      <p>Version: {{ signalSource.version }}</p>
      <p>Created time: {{ signalSource.createdTime.toLocaleString() }}</p>
    </div>

    <button @click="navigateTo('/signal-sources')">Back to list</button>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();
const route = useRoute();
const sourceId = route.params.signalSourceId as string;

const signalSource = ref(null);

onMounted(async () => {
  const result = await $resources.getSignalSource(sourceId);

  signalSource.value = {
    id: result.id,
    name: result.name,
    description: result.description,
    version: result.version,
    createdTime: new Date(result.createdTime),
  };
});
</script>

<style scoped lang="scss">
.user-details {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  font-size: 16px;
  h1 {
    color: #333;
  }

  div {
    margin-top: 20px;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
