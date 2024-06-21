<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p>User</p>
  </div>

  <div>
    <button>Edit properties</button>
    <button>Delete</button>
    <button>Refresh</button>
    <button>Reset password</button>
    <button>Revoke sessions</button>
    <button>Manage View</button>
  </div>

  <h3>Basic Info</h3>
  <table>
    <tbody>
      <tr>
        <th>User Id</th>
        <td>{{ user.id }}</td>
      </tr>

      <tr>
        <th>Name</th>
        <td>{{ user.name }}</td>
      </tr>

      <tr>
        <th>Email</th>
        <td>{{ user.email }}</td>
      </tr>

      <tr>
        <th>Email Confirmed</th>
        <td>{{ user.emailConfirmed }}</td>
      </tr>

      <tr>
        <th>Lockout Enabled</th>
        <td>{{ user.lockoutEnabled }}</td>
      </tr>

      <tr>
        <th>Access Failed Count</th>
        <td>{{ user.accessFailedCount }}</td>
      </tr>
      <tr>
        <th>Created At</th>
        <td>{{ user.createdAt }}</td>
      </tr>
    </tbody>
  </table>

  <h3>Accounts</h3>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="account in user.accounts">
        <td>{{ account.id }}</td>
        <td>{{ account.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const route = useRoute();
const userId = ref(route.params.userId);

const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: user,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServerOptions.baseAddress}/api/v1/users/${userId.value}`
);
</script>
