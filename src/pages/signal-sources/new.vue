<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Id</label>
        <input type="text" v-model="newSignalSource.id" />
      </div>

      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="newSignalSource.name" />
      </div>

      <div class="form-group">
        <label>Description</label>
        <input type="text" v-model="newSignalSource.description" />
      </div>

      <div class="form-group">
        <label>Version</label>
        <div class="version-input">
          <input
            type="number"
            v-model="newSignalSource.version.major"
            placeholder="MAJOR"
            min="0"
            required
          />
          <span>.</span>
          <input
            type="number"
            v-model="newSignalSource.version.minor"
            placeholder="MINOR"
            min="0"
            required
          />
          <span>.</span>
          <input
            type="number"
            v-model="newSignalSource.version.patch"
            placeholder="PATCH"
            min="0"
            required
          />
        </div>
        <small>Format: MAJOR.MINOR.PATCH (e.g., 1.0.0)</small>
      </div>

      <div class="form-group">
        <button type="submit" class="primary-button">Submit</button>
        <button
          type="button"
          class="secondary-button"
          @click="navigateTo('/instruments')"
        >
          Back
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { $resources } = useNuxtApp();

const newSignalSource = ref({
  id: "",
  name: "",
  description: "",
  version: {
    major: 0,
    minor: 0,
    patch: 0,
  },
});

const submit = async () => {
  try {
    const createdResponse = await $resources.createSignalSource({
      id: newSignalSource.value.id,
      name: newSignalSource.value.name,
      description: newSignalSource.value.description,
      version: `${newSignalSource.value.version.major}.${newSignalSource.value.version.minor}.${newSignalSource.value.version.patch}`,
    });

    alert(`Signal source created: ${createdResponse.id}`);
    navigateTo("/signal-sources");
  } catch (error) {
    alert(`Failed to create signal source: ${error}`);
  }
};
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

.version-input {
  display: flex;
  align-items: center;
}

.version-input input {
  width: 3rem;
  text-align: center;
  margin-right: 0.25rem;
}

.version-input span {
  font-size: 1rem;
  font-weight: bold;
}
</style>
