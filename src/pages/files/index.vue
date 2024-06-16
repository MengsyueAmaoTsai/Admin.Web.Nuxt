<template>
  <h1>Users</h1>

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
      <tr v-for="file in files" :key="file.id">
        <td>{{ file.id }}</td>
        <td>{{ file.name }}</td>
        <td>{{ file.description }}</td>
        <td>
          {{ file.description }}
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
const files = [
  {
    id: 1,
    name: "file1",
    description: "description1",
  },
  {
    id: 2,
    name: "file2",
    description: "description2",
  },
];
</script>
