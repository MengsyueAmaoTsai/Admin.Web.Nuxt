<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>User</label>

        <select v-model="newAccount.userId">
          <option
            v-for="option in userOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Account name</label>
        <input type="text" v-model="newAccount.name" />
      </div>

      <div class="form-group">
        <button type="submit" class="primary-button">Submit</button>
        <button
          type="button"
          class="secondary-button"
          @click="navigateTo('/users')"
        >
          Back
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();

const newAccount = ref({
  userId: "",
  name: "",
});

const userOptions = ref([]);

const submit = async () => {
  try {
    const createdResponse = await $resources.createAccount({
      userId: newAccount.value.userId,
      name: newAccount.value.name,
    });

    alert(`Account created: ${createdResponse.id}`);
    navigateTo("/accounts");
  } catch (error) {
    alert(`Failed to create user: ${error}`);
  }
};

onMounted(async () => {
  const result = await $resources.listUsers();

  userOptions.value = result.map((user) => ({
    value: user.id,
    text: `${user.email} ${user.name}`,
  }));
});
</script>
<style scoped lang="scss">
.form-group {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.form-group label {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
}

.form-group button {
  margin-right: 1rem;
  min-width: 100px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  border: none;
}

.primary-button {
  background-color: #007bff;
  color: white;
}

.secondary-button {
  background-color: #6c757d;
  color: white;
}
</style>
