<template>
  <div>
    <h1>New trading account</h1>

    <form @submit.prevent="createAccount">
      <div>
        <label for="accountName">Name</label>
        <input type="text" v-model="accountName" />
      </div>
      <div>
        <button type="submit">Review + create</button>
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const accountName = ref("");

const router = useRouter();
const resourceServerOptions = useRuntimeConfig().public.resourceService;

const createAccount = async () => {
  try {
    await $fetch(`${resourceServerOptions.baseAddress}/api/v1/accounts`, {
      method: "POST",
      body: {
        name: accountName.value,
      },
    });

    accountName.value = "";
    router.push("/users");
  } catch (err) {
    console.error("Error adding user:", err);
  }
};
</script>

<style></style>
