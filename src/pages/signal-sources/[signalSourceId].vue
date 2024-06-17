<template>
  <div>
    {{ source }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.signalSourceId;
const url = `http://localhost:11000/api/v1/signal-sources/${id}`;
const { data: source, error, execute, refresh } = await useFetch(url);
console.log(source, error, execute, refresh);
</script>
