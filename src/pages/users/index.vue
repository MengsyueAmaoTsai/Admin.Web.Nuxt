<template>
  <div>
    <h2>Users</h2>

    <!-- Operations -->
    <div>
      <!-- <button @click="navigateToCreate">New User</button> -->
      <NuxtLink to="/users/create">New User</NuxtLink>
      <button>Download Users</button>

      <!-- Bulk Operations -->
      <select>
        <option>Bulk Create</option>
        <option>Bulk Delete</option>
      </select>
      <button>Refresh</button>

      <!-- Manage View -->
      <select>
        <option>Bulk Create</option>
        <option>Bulk Delete</option>
      </select>

      <button>Delete</button>
    </div>

    <div>
      <input type="text" class="search" placeholder="Search..." />
      <button>Add filter</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users.items" :key="user.id">
          <td>
            <NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink>
          </td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
// Get options
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

// Get router
const router = useRouter();

// Fetch users
const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/users`);

function navigateToCreate() {
  console.log("Navigate to create user");
}
</script>
