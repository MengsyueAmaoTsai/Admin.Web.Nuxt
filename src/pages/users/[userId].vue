<template>
  <div>
    <Button @click="navigateTo('/users')">Back to list</Button>

    <div v-if="user">
      <div class="row">
        <div>Id</div>
        <div>{{ user.id }}</div>
      </div>

      <div class="row">
        <div>Email</div>
        <div>{{ user.email }}</div>
      </div>

      <div class="row">
        <div>Name</div>
        <div>{{ user.name }}</div>
      </div>

      <div class="row">
        <div>Id</div>
        <div>{{ user.id }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ user.createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $resourceService } = useNuxtApp();
const route = useRoute();
const userId = ref(route.params.userId);

const user = ref(null);
onMounted(async () => {
  const response = await $resourceService.getUser(userId.value);
  user.value = {
    id: response.id,
    email: response.email,
    name: response.name,
    createdTime: new Date(response.createdTime),
  };
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
