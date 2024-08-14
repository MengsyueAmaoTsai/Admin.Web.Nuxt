<template>
  <div>
    <div>
      <button @click="newUser">New user</button>
      <button @click="refreshData">Refresh</button>
      <button>Manage View</button>
      <button>Delete</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <NuxtLink :to="`/users/${user.id}`">{{ user.id }}</NuxtLink>
          </td>
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
definePageMeta({
  title: "Users",
  description: "List of users",
  layout: "resources-list",
});

const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/users`);

const router = useRouter();

function newUser() {
  router.push("/users/create");
}
const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
