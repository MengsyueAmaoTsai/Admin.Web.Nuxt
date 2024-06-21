<template>
  <div>
    <fluent-breadcrumb>
      <fluent-breadcrumb-item href="/">Home</fluent-breadcrumb-item>
      <fluent-breadcrumb-item>Users</fluent-breadcrumb-item>
    </fluent-breadcrumb>

    <h2>Users</h2>

    <!-- Operations -->
    <div>
      <!-- <button @click="navigateToCreate">New User</button> -->
      <NuxtLink to="/users/create"
        ><fluent-button appearance="accent">New User</fluent-button></NuxtLink
      >

      <fluent-button appearance="accent">Download Users</fluent-button>

      <!-- Bulk Operations -->
      <select>
        <option>Bulk Create</option>
        <option>Bulk Delete</option>
      </select>
      <fluent-button appearance="accent">Refresh</fluent-button>

      <!-- Manage View -->
      <select>
        <option>Bulk Create</option>
        <option>Bulk Delete</option>
      </select>

      <fluent-button appearance="accent">Delete</fluent-button>
    </div>

    <div>
      <input type="text" class="search" placeholder="Search..." />
      <fluent-button appearance="accent">Add filter</fluent-button>
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
