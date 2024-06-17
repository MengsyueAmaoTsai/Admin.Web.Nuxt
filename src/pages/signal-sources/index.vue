<template>
  <div>
    <h1>Signal Sources</h1>

    <button>Create</button>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="source in signalSources.items" :key="source.id">
          <td>{{ source.id }}</td>
          <td>{{ source.name }}</td>
          <td>{{ source.description }}</td>
          <td>
            <NuxtLink :to="`/signal-sources/${source.id}`">Details</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const {
  data: signalSources,
  error,
  execute,
  refresh,
} = await useFetch("http://localhost:11000/api/v1/signal-sources");
</script>
