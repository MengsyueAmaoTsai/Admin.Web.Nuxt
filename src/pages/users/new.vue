<template>
  <div>
    <div class="row">
      <label>Email</label>
      <TextField v-model="email" placeholder="someone@example.com"></TextField>
    </div>

    <div class="row">
      <label>Name</label>
      <fluent-text-field
        required
        @input="name = $event.target.value"
      ></fluent-text-field>
    </div>

    <div class="row">
      <label>Password</label>
      <fluent-text-field
        required
        type="password"
        @input="password = $event.target.value"
      >
      </fluent-text-field>
    </div>

    <div class="row">
      <fluent-button
        @click="createUser"
        appearance="accent"
        :disabled="!email || !name || !password || isBusy"
        >Create</fluent-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUserService } from "~/resources/users";

const userService = useNuxtApp().$userService as IUserService;

const isBusy = ref(false);

const email = ref("");
const name = ref("");
const password = ref("");

const createUser = async () => {
  isBusy.value = true;

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
  } finally {
    isBusy.value = false;
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
