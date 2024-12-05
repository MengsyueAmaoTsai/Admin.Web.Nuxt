<template>
  <div>
    <div>
      <Button @click="navigateTo('/users/new')">New user</Button>
    </div>

    <Search></Search>

    <div>{{ users.length }} user{{ users.length <= 1 ? "" : "s" }} found</div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>Email</th>
          <th>Name</th>
          <th>Created time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="users.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="user of users">
          <td><input type="checkbox" /></td>
          <td>{{ user.id }}</td>
          <td>
            <a :href="`/users/${user.id}`">
              {{ user.email }}
            </a>
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.createdTime.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { $resourceService } = useNuxtApp();

const users = ref<
  { id: string; email: string; name: string; createdTime: Date }[]
>([]);

onMounted(async () => {
  const responses = await $resourceService.listUsers();

  users.value = responses.map((response) => ({
    id: response.id,
    email: response.email,
    name: response.name,
    createdTime: new Date(response.createdTime),
  }));
});
</script>
