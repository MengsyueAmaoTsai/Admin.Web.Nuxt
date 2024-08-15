<template>
  <div>
    <h1>Create new user</h1>
    <div>Create a new application user in your system</div>
  </div>

  <form @submit.prevent="createUser">
    <!-- Name -->
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="name" />
    </div>

    <!-- Email -->
    <div>
      <label for="name">Email</label>
      <input type="text" v-model="email" />
    </div>

    <div>
      <button type="submit">Review + create</button>
      <button type="button">Previous</button>
      <button type="button">Next</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const name = ref("");
const email = ref("");

const router = useRouter();
const resourceServerOptions = useRuntimeConfig().public.resourceService;

const createUser = async () => {
  try {
    await $fetch(`${resourceServerOptions.baseAddress}/api/v1/users`, {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
      },
    });

    name.value = "";
    email.value = "";
    router.push("/users");
  } catch (err) {
    console.error("Error adding user:", err);
  }
};
</script>

<style lang="scss" scoped></style>
