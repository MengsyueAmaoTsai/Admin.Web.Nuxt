<template>
  <div>
    <div>
      <div>
        <label>Id</label>
      </div>
      <input v-model="request.id" />
    </div>

    <div>
      <div>
        <label>Name</label>
      </div>
      <input v-model="request.name" />
    </div>

    <div>
      <div>
        <label>Description</label>
      </div>
      <input v-model="request.description" />
    </div>

    <div @click="createSignalSource" role="button"><span>Create</span></div>
  </div>
</template>

<script lang="ts" setup>
type CreateSignalSourceRequest = {
  id: string;
  name: string;
  description: string;
};

const request = ref({
  id: "",
  name: "",
  description: "",
});

const resourceServiceOptions = useRuntimeConfig().public.resourceService;

async function createSignalSource() {
  const response = await $fetch(
    `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: request.value,
    }
  );

  return response;
}
</script>

<style lang="scss" scoped></style>
