<template>
  <div class="user-details-container">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <div class="title-container">
      <h2>{{ pageTitle }}</h2>
    </div>

    <div class="content-container">
      <div class="side-nav-container">
        <input type="text" placeholder="Search" />

        <!-- Menu items -->
        <div class="side-nav-items-container">
          <NuxtLink to="/users">Overview</NuxtLink>
          <NuxtLink to="/users">Sign-in logs</NuxtLink>
          <NuxtLink to="/users">Audit logs</NuxtLink>
        </div>
      </div>

      <div class="data-container">
        <div class="toolbar-container">
          <button>Edit properties</button>
          <button>Delete</button>
          <button>Refresh</button>
          <button>Reset password</button>
          <button>Revoke sessions</button>
          <button>Manage View</button>
        </div>

        <div class="message-bar-container">
          <p>Azure Active Directory is now Microsoft Entra ID.</p>
        </div>
      </div>

      <!-- Tabs -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const userId = route.params.userId;

const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: user,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServerOptions.baseAddress}/api/v1/users/${userId}`
);

const breadcrumbs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: user.value.name,
    path: `/users/${user.value.id}`,
  },
];

const pageTitle = user.value.name;
</script>

<style></style>
