<template>
  <div>
    <div>
      <Button @click="navigateTo('/accounts/new')">New account</Button>
    </div>

    <Search></Search>

    <div>
      {{ accounts.length }} account{{ accounts.length <= 1 ? "" : "s" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>User Id</th>
          <th>Name</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="accounts.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="account of accounts">
          <td><input type="checkbox" /></td>
          <td>{{ account.id }}</td>
          <td>{{ account.userId }}</td>
          <td>
            <a :href="`/accounts/${account.id}`">
              {{ account.name }}
            </a>
          </td>
          <td>{{ account.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { AccountResponse, IAccountService } from "~/resources/accounts";

const accountService = useNuxtApp().$accountService as IAccountService;

const accounts = ref<AccountResponse[]>([]);

onMounted(async () => {
  const responses = await accountService.listAccounts();
  accounts.value = responses;
});
</script>
