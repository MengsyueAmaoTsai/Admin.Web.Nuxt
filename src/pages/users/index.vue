<template>
  <div>
    <h1>Users</h1>

    <div>
      <button @click="$router.push('users/create')">New user</button>
      <button
        @click="console.log(selectedUserIds)"
        :disabled="selectedUserIds.length === 0"
      >
        Delete
      </button>
      <button @click="refreshData">Refresh</button>
    </div>

    <!-- User data -->
    <div v-if="users.length === 0">No data</div>

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
          <th>Email</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <input type="checkbox" :value="user.id" v-model="selectedUserIds" />
          </td>
          <td>
            <NuxtLink :to="`users/${user.id}`">{{ user.id }}</NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`users/${user.id}`">{{ user.name }}</NuxtLink>
          </td>

          <td>{{ user.email }}</td>
          <td>{{ user.createdTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const selectedUserIds = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/users`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedUserIds.value = users.value.map((user) => user.id);
  } else {
    selectedUserIds.value = [];
  }
};

const refreshData = async () => {
  await refresh();
};
</script>
