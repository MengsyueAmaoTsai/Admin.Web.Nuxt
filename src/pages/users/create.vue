<template>
  <div>
    <h2>Create new user</h2>
    <p>Create a new internal user in your system.</p>
    <NuxtLink to="/users">X</NuxtLink>
  </div>

  <div>
    <div class="basic">
      <table>
        <tbody>
          <tr>
            <th>Identity</th>
          </tr>

          <tr>
            <th>Name</th>
            <td>
              <input type="text" v-model="name" />
            </td>
          </tr>

          <tr>
            <th>E-Mail</th>
            <td>
              <input
                type="email"
                placeholder="example@domain.com"
                v-model="email"
              />
            </td>
          </tr>

          <tr>
            <th>Password</th>
            <td>
              <input type="password" v-model="password" />
              <div><input type="checkbox" checked />Auto-generate password</div>
            </td>
          </tr>

          <tr>
            <th>Lockout Enabled</th>
            <td>
              <input type="checkbox" :checked="lockoutEnabled" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="properties"></div>

    <fluent-button @click="createUser" appearance="accent"
      >Create</fluent-button
    >
  </div>
</template>

<script setup lang="ts">
const resourceServerOptions = useRuntimeConfig().public.resourceServer;
const passwordGenerator = usePasswordGenerator();
const lockoutEnabled = ref(true);

const name = ref("");
const email = ref("");
const password = ref(passwordGenerator.value.generate());

const createUser = async (): Promise<void> => {
  const createUserRequest = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch(
      `${resourceServerOptions.baseAddress}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createUserRequest),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style></style>
