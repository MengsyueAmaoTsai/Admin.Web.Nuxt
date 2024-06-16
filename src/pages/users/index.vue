<template>
  <h1>Users</h1>

  <button>Create</button>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Email</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          {{ user.description }}
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
const users = [
  { id: 1, email: "test@gmail.com", name: "User 1" },
  { id: 2, email: "test2@gmail.com", name: "User 2" },
];
</script>
