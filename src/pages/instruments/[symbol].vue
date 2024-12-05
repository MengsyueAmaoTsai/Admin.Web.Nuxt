<template>
  <div>
    <div v-if="instrument" class="user-details">
      <p>Id: {{ instrument.id }}</p>
      <p>Email: {{ instrument.symbol }}</p>
      <p>Name: {{ instrument.description }}</p>
      <p>Type: {{ instrument.type }}</p>
      <p>Created time: {{ instrument.createdTime.toLocaleString() }}</p>
    </div>

    <button @click="navigateTo('/instruments')">Back to list</button>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();
const route = useRoute();
const symbol = route.params.symbol as string;

const instrument = ref(null);

onMounted(async () => {
  const result = await $resources.getInstrument(symbol);

  instrument.value = {
    id: result.id,
    symbol: result.symbol,
    description: result.description,
    type: result.type,
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
