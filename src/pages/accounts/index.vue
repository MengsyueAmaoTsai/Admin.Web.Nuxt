<template>
  <div>
    <div>
      <button>Refresh</button>
      <button>Manage View</button>
      <button>Delete</button>
    </div>

    <MessageBar />
    <SearchBox />

    <div>
      {{ accounts.totalCount }}
      {{ accounts.totalCount === 1 ? "account" : "accounts" }}
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
          <th>Created at</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="account in accounts.items" :key="account.id">
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <div>
              <NuxtLink :to="`accounts/${account.id}`">{{
                account.id
              }}</NuxtLink>
            </div>
          </td>

          <td>
            <div>
              <NuxtLink :to="`users/${account.userId}`">{{
                account.userId
              }}</NuxtLink>
            </div>
          </td>

          <td>
            <div>
              {{ account.name }}
            </div>
          </td>
          <td>
            <div>
              {{ account.createdAt }}
            </div>
          </td>
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
</script>

<style lang="scss" scoped></style>
