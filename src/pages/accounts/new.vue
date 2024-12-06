<template>
  <div>
    <div class="row">
      <label>User Id</label>
      <input type="text" v-model="userId" />
    </div>
    <div class="row">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>

    <div class="row">
      <Button @click="createUser">Create</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAccountService } from "~/resources/accounts";

const accountService = useNuxtApp().$accountService as IAccountService;

const userId = ref("");
const name = ref("");

const createUser = async () => {
  try {
    const createdResponse = await accountService.createAccount({
      userId: userId.value,
      name: name.value,
    });

    alert(`Account ${createdResponse.id} created`);
    navigateTo("/accounts");
  } catch (error) {
    alert(`Failed to create account: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
