<template>
  <div>
    <h2>Accounts</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="account in accounts.items" :key="account.id">
          <td>
            <NuxtLink :to="`/accounts/${account.id}`">{{
              account.id
            }}</NuxtLink>
          </td>
          <td>{{ account.userId }}</td>
          <td>{{ account.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: accounts,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/accounts`);
</script>
