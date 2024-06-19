<template>
  <div>
    <h2>Meng syue tsai</h2>
    <p>Properties</p>
  </div>

  <div>
    <button>Refresh</button>
  </div>

  <div>
    <button>Save</button>
    <button>Cancel</button>
  </div>

  <div>This view only contains properties that can be updated.</div>
</template>

<script setup lang="ts">
const route = useRoute();

const userId = ref(route.params.userId);

const {
  data: user,
  error,
  execute,
  refresh,
} = await useFetch(`http://localhost:11000/api/v1/users/${userId.value}`);
</script>
