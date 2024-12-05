<template>
  <div class="container">
    <div>
      <button @click="navigateTo('/instruments/new')">New instrument</button>
    </div>

    <div class="result-info">
      {{ instruments.length }} instrument{{
        instruments.length === 1 ? "" : "s"
      }}
      found
    </div>

    <div class="search-bar">
      <input class="search-input" type="search" placeholder="Search" />
    </div>

    <div>
      <DataGrid :items="instruments"></DataGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();

const instruments = ref<
  {
    id: string;
    symbol: string;
    description: string;
    type: string;
    createdTime: Date;
  }[]
>([]);

onMounted(async () => {
  const result = await $resources.listInstruments();

  instruments.value = result.map((instrument) => ({
    id: instrument.id,
    symbol: instrument.symbol,
    description: instrument.description,
    type: instrument.type,
    createdTime: new Date(instrument.createdTime),
  }));
});
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Header with button */
.header {
  text-align: right;
  margin-bottom: 20px;
}

.new-user-btn {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.new-user-btn:hover {
  background-color: #45a049;
}

/* Information about search results */
.result-info {
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
}

/* Search bar */
.search-bar {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #3e8e41;
}

button:focus {
  outline: none;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: #ccc;
}
</style>
