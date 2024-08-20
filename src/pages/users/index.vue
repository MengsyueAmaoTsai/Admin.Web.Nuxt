<template>
  <div>
    <div>
      <button>New user</button>
      <button>Delete</button>
      <button>Download users</button>
      <button>Bulk operations</button>
      <button @click="refreshData">Refresh</button>
      <button>Manage view</button>
      <button>Per-user MFA</button>
    </div>

    <div>Azure Active Directory is now Microsoft Entra ID.</div>

    <section>
      <input placeholder="Search" />
      <button>Add filter</button>
    </section>

    <section>
      {{ users.length }} {{ users.length === 1 ? "user" : "users" }} found
    </section>
  </div>
</template>

<script lang="ts" setup>
const baseAddress = useRuntimeConfig().public.apiService.baseAddress;

const {
  data: users,
  error,
  execute,
  refresh,
} = useFetch(`${baseAddress}/api/v1/users`);

const refreshData = async () => {
  await refresh();
};
</script>

<style lang="scss" scoped></style>
