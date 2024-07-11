<template>
  <div>
    <div>
      <button @click="newUser">New user</button>
      <button>Refresh</button>
      <button>Manage View</button>
      <button>Delete</button>
    </div>

    <MessageBar />

    <div>
      <input type="text" placeholder="Search" />
    </div>

    <div>
      {{ users.totalCount }}
      {{ users.totalCount === 1 ? "user" : "users" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users.items" :key="user.id">
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <div>
              <NuxtLink :to="`users/${user.id}`">{{ user.name }}</NuxtLink>
            </div>
          </td>

          <td>
            <div>
              {{ user.email }}
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
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/users`);

const router = useRouter();

function newUser() {
  router.push("/users/create");
}
</script>

<style lang="scss" scoped></style>
