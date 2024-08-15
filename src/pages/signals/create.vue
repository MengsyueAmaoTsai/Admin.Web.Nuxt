<template>
  <div>
    <h1>Create new user</h1>
    <div>Create a new application user in your system</div>
  </div>

  <form @submit.prevent="createUser">
    <div>
      <labe>Source id</labe>
      <input type="text" v-model="sourceId" />
    </div>

    <div>
      <label>Symbol</label>
      <input type="text" v-model="symbol" />
    </div>

    <div>
      <button type="submit">Review + create</button>
      <button type="button">Previous</button>
      <button type="button">Next</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const router = useRouter();
const resourceServerOptions = useRuntimeConfig().public.resourceService;

const sourceId = ref("1");
const symbol = ref("MAX:BTCUSDT");

const createUser = async () => {
  try {
    await $fetch(`${resourceServerOptions.baseAddress}/api/v1/signals`, {
      method: "POST",
      body: {
        sourceId: sourceId.value,
        time: new Date().toISOString(),
        symbol: symbol.value,
      },
    });

    sourceId.value = "";
    router.push("/signals");
  } catch (err) {
    console.error("Error adding signal:", err);
  }
};
</script>

<style lang="scss" scoped></style>
