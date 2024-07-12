<template>
  <div>
    <div>
      <div>
        <label>Name</label>
      </div>
      <input v-model="newUser.name" />
    </div>

    <div>
      <div>
        <label>Email</label>
      </div>
      <input v-model="newUser.email" />
    </div>

    <div>
      <div @click="createUser" role="button"><span>Create</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const newUser = ref({
  name: "",
  email: "",
  password: "",
});

const router = useRouter();
const resourceServerOptions = useRuntimeConfig().public.resourceService;

const createUser = async () => {
  try {
    const response = await $fetch(
      `${resourceServerOptions.baseAddress}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newUser.value,
      }
    );
    router.push("/users");
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
