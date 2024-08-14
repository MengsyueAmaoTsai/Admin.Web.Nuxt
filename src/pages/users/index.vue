<template>
  <div>
    <h1>Users</h1>

    <div>
      <button @click="newUserFormVisible = true">New user</button>
      <button @click="refreshData">Refresh</button>
    </div>

    <!-- New user form -->
    <div v-if="newUserFormVisible">
      <h2>New user</h2>

      <form @submit.prevent="createUser">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="createUserRequest.name" />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" v-model="createUserRequest.email" />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button type="button" @click="newUserFormVisible = false">
            Cancel
          </button>
        </div>
      </form>
    </div>

    <!-- User data -->
    <div v-if="users.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
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
const newUserFormVisible = ref(false);
const createUserRequest = ref({ name: "", email: "" });

const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/users`);

const createUser = async () => {
  try {
    await $fetch(`${resourceServiceOptions.baseAddress}/api/v1/users`, {
      method: "POST",
      body: createUserRequest.value,
    });

    createUserRequest.value = { name: "", email: "" };
    newUserFormVisible.value = false;

    await refresh();
  } catch (err) {
    console.error("Error adding user:", err);
  }
};

const refreshData = async () => {
  await refresh();
};
</script>
