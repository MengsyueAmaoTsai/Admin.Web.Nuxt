<template>
  <div>
    <div v-if="account" class="account-details">
      <p>Id: {{ account.id }}</p>
      <p>User id: {{ account.userId }}</p>
      <p>Name: {{ account.name }}</p>
      <p>Created time: {{ account.createdTime.toLocaleString() }}</p>
    </div>

    <button @click="navigateTo('/accounts')">Back to list</button>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();
const route = useRoute();
const accountId = route.params.accountId as string;

const account = ref(null);

onMounted(async () => {
  const result = await $resources.getAccount(accountId);

  account.value = {
    id: result.id,
    userId: result.userId,
    name: result.name,
    createdTime: new Date(result.createdTime),
  };
});
</script>

<style scoped lang="scss">
.user-details {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  font-size: 16px;
  h1 {
    color: #333;
  }

  div {
    margin-top: 20px;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
