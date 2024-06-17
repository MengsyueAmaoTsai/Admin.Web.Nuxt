<template>
  <div>
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
        <tr v-for="user in users.items" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            {{ user.description }}
          </td>
          <td>
            <NuxtLink :to="`/users/${user.id}`">Details</NuxtLink>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch("http://localhost:11000/api/v1/users");
</script>
