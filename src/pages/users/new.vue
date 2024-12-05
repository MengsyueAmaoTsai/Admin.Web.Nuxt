<template>
  <div>
    <div class="row">
      <label>Email</label>
      <input type="email" v-model="email" />
    </div>
    <div class="row">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div class="row">
      <label>Password</label>
      <input type="password" v-model="password" />
    </div>

    <div class="row">
      <Button @click="createUser">Create</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUserService } from "~/resources/users";

const userService = useNuxtApp().$userService as IUserService;

const email = ref("");
const name = ref("");
const password = ref("");

const createUser = async () => {
  try {
    const createdResponse = await userService.createUser({
      email: email.value,
      name: name.value,
      password: password.value,
    });

    alert(`User ${createdResponse.id} created`);
    navigateTo("/users");
  } catch (error) {
    alert(`Failed to create user: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
