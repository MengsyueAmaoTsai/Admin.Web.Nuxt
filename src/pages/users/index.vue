<template>
  <div>
    <!-- Command Bar -->
    <div>
      <div>New user</div>
      <div>Download users</div>
      <div>Bulk operations</div>
      <button @click="refreshUsers">Refresh</button>
      <div>Manage view</div>
      <div>Delete</div>
      <div>Per-user MFA</div>
    </div>
    <!-- Message Bar -->

    <!-- Filter Bar -->

    <!-- Result Message-->
    <div>
      {{ users.totalCount }}
      {{ users.totalCount === 1 ? "user" : "users" }} found
    </div>

    <!-- Data grid -->
    <table>
      <thead>
        <tr>
          <input
            type="checkbox"
            @change="toggleAllUsers"
            :checked="isAllSelected"
          />
          <th>Name</th>
          <th>Email</th>
          <th>Created at</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users.items" :key="user.id">
          <input type="checkbox" v-model="selectedUsers" :value="user.id" />
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/users`);

const selectedUsers = ref<string[]>([]);

const isAllSelected = computed(() => {
  return (
    users.value?.items.length &&
    selectedUsers.value.length === users.value.items.length
  );
});

function toggleAllUsers(event: Event): void {
  const target = event.target as HTMLInputElement;
  selectedUsers.value = target.checked
    ? users.value?.items.map((user) => user.id) || []
    : [];
}

async function refreshUsers(): void {
  await refresh();
  selectedUsers.value = [];
}
</script>

<style scoped lang="scss">
.command-bar__button-container {
  flex-shrink: 0;
  display: inherit;
}

.command-bar__button {
  outline: transparent;
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  font-weight: 400;
  border: none;
  border-radius: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 0px 4px;
  text-decoration: none;
  text-align: center;
  min-width: 40px;
  height: 100%;
  user-select: none;
  font-family: inherit;
}
.text-container {
  flex-grow: 1;
  display: block;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  border: none;
  border-radius: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 0px 4px;
  text-decoration: none;
  text-align: center;
  min-width: 40px;
  height: 100%;
  user-select: none;
  outline: transparent;
  position: relative;
}

.command-bar__button-text {
  font-family: inherit;
  outline: transparent;
  position: relative;
  font-size: 13px;
  border: none;
  border-radius: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 0px 4px;
  text-decoration: none;
  text-align: center;
  min-width: 40px;
  height: 100%;
  user-select: none;
  margin: 0px 4px;
  line-height: 100%;
  display: block;
  font-weight: normal;
  white-space: nowrap;
}
</style>
