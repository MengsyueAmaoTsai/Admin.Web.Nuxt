<template>
  <div>
    <h1>New signal source</h1>

    <form @submit.prevent="createSignalSource">
      <div>
        <label>Id</label>
        <input v-model="id" />
      </div>

      <div>
        <div>
          <label>Name</label>
        </div>
        <input v-model="name" />
      </div>

      <div>
        <div>
          <label>Description</label>
        </div>
        <input v-model="description" />
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
const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const router = useRouter();

const id = ref<string>("");
const name = ref<string>("");
const description = ref<string>("");

const createSignalSource = async () => {
  try {
    await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`,
      {
        method: "POST",
        body: {
          id: id.value,
          name: name.value,
          description: description.value,
        },
      }
    );

    id.value = "";
    name.value = "";
    description.value = "";
    router.push("/signal-sources");
  } catch (err) {
    console.error("Error adding signal source:", err);
  }
};
</script>

<style lang="scss" scoped></style>
