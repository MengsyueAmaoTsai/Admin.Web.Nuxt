<template>
  <div>
    <h1>New instrument</h1>
    <form @submit.prevent="createInstrument">
      <div>
        <label for="symbol">Symbol</label>
        <input type="text" id="symbol" v-model="symbol" />
      </div>

      <div>
        <label for="description">Description</label>
        <input type="text" id="description" v-model="description" />
      </div>

      <div>
        <label for="type">Type</label>
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
const router = useRouter();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const symbol = ref<string>("");
const description = ref<string>("");
const type = ref<string>("CryptoCurrency");

const createInstrument = async () => {
  try {
    await $fetch(`${resourceServiceOptions.baseAddress}/api/v1/instruments`, {
      method: "POST",
      body: {
        symbol: symbol.value,
        description: description.value,
        type: type.value,
      },
    });

    symbol.value = "";
    description.value = "";
    type.value = "";
    router.push("/instruments");
  } catch (err) {
    console.error("Error adding user:", err);
  }
};
</script>

<style></style>
