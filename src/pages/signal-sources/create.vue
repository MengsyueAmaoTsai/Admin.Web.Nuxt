<template>
  <div>
    <div>
      <div>
        <label>Id</label>
      </div>
      <input v-model="newSignalSource.id" />
    </div>

    <div>
      <div>
        <label>Name</label>
      </div>
      <input v-model="newSignalSource.name" />
    </div>

    <div>
      <div>
        <label>Description</label>
      </div>
      <input v-model="newSignalSource.description" />
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

const resourceServiceOptions = useRuntimeConfig().public.resourceService;
const router = useRouter();

const newSignalSource = ref({
  id: "",
  name: "",
  description: "",
});

async function createSignalSource() {
  try {
    const response = await $fetch(
      `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newSignalSource.value,
      }
    );

    router.push("/signal-sources");
  } catch (error) {}
}
</script>

<style lang="scss" scoped></style>
