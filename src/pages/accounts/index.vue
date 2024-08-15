<template>
  <div>
    <div class="toolbar">
      <button @click="$router.push('/accounts/create')">Create account</button>
      <button @click="refreshData">Refresh</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>
            <NuxtLink :to="`accounts/${account.id}`">{{ account.id }}</NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`accounts/${account.id}`">{{
              account.name
            }}</NuxtLink>
          </td>

          <td>{{ account.createdTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: accounts,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/accounts`);

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
