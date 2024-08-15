<template>
  <div>
    <div>
      <button @click="$router.push('/accounts/create')">
        New trading account
      </button>

      <button @click="refreshData">Refresh</button>
    </div>

    <div v-if="accounts.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="selectAll"
              @change="selectOrUnselectAll"
            />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>
            <input
              type="checkbox"
              :value="account.id"
              v-model="selectedAccountIds"
            />
          </td>
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
const selectedAccountIds = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: accounts,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/accounts`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedAccountIds.value = accounts.value.map((account) => account.id);
  } else {
    selectedAccountIds.value = [];
  }
};

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
