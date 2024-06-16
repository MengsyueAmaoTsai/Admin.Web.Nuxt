<template>
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
      <tr v-for="source in signalSources" :key="source.id">
        <td>{{ source.id }}</td>
        <td>{{ source.name }}</td>
        <td>
          {{ source.description }}
        </td>
        <td>
          <button>Details</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const signalSources = [
  { id: 1, name: "Source 1", description: "Description 1" },
  { id: 2, name: "Source 2", description: "Description 2" },
  { id: 3, name: "Source 3", description: "Description 3" },
  { id: 4, name: "Source 4", description: "Description 4" },
  { id: 5, name: "Source 5", description: "Description 5" },
];
</script>
