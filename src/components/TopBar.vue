<template>
  <div class="root">
    <div>
      <fluent-button
        @click="toggleDrawer"
        appearance="outline"
        class="hamburger-button"
        >☰</fluent-button
      >
    </div>
    <div>RichillCapital Admin</div>
    <div>
      <fluent-text-field
        placeholder="Search resources, services, and docs (G+/)"
      ></fluent-text-field>
    </div>
    <div>User Profile</div>
  </div>

  <div v-if="isDrawerOpen" class="side-menu">
    <div class="menu-content">
      <NuxtLink to="/users">Users</NuxtLink>
      <NuxtLink to="/accounts">Accounts</NuxtLink>
      <NuxtLink to="/signals">Signals</NuxtLink>
      <NuxtLink to="/signal-sources">Signal Sources</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isDrawerOpen = ref(false);

const toggleDrawer = (): void => {
  isDrawerOpen.value = !isDrawerOpen.value;

  console.log("Drawer is now", isDrawerOpen.value ? "open" : "closed");
};
</script>

<style scoped>
.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0078d4;
  color: white;
}

.hamburger-button {
  font-size: 20px;
  cursor: pointer;
}

.menu-content {
  display: flex;
}
</style>
