<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Symbol</label>
        <input type="text" v-model="newInstrument.symbol" />
      </div>

      <div class="form-group">
        <label>Description</label>
        <input type="text" v-model="newInstrument.description" />
      </div>

      <div class="form-group">
        <label>Type</label>
        <select v-model="newInstrument.type">
          <option value="" disabled>Please select a type</option>
          <option value="Future">Future</option>
        </select>
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

const newInstrument = ref({
  symbol: "",
  description: "",
  type: "",
});

const submit = async () => {
  try {
    const createdResponse = await $resources.createInstrument({
      symbol: newInstrument.value.symbol,
      description: newInstrument.value.description,
      type: newInstrument.value.type,
    });

    alert(`Instrument created: ${createdResponse.id}`);
    navigateTo("/instruments");
  } catch (error) {
    alert(`Failed to create instrument: ${error}`);
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

.form-group select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  background-color: white;
  font-family: Arial, sans-serif;
}
</style>
