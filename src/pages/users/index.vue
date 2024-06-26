<template>
  <div>
    <div class="breadcrumb-container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
    </div>

    <div class="title-container">
      <h2>{{ pageTitle }}</h2>
    </div>

    <div class="content-container">
      <div class="side-nav-container">
        <input type="text" placeholder="Search" />
        <!-- Menu items -->

        <div class="side-nav-items-container">
          <NuxtLink to="/users">All users</NuxtLink>
          <NuxtLink to="/users">Sign-in logs</NuxtLink>
          <NuxtLink to="/users">Audit logs</NuxtLink>
        </div>
      </div>

      <div class="data-container">
        <div class="toolbar-container">
          <button>New user</button>
          <button>Download users</button>
          <button>Bulk operations</button>
          <button>Refresh</button>
          <button>Delete</button>
        </div>

        <div class="message-bar-container">
          <p>Azure Active Directory is now Microsoft Entra ID.</p>
        </div>

        <div class="data-grid-toolbar-container">
          <input type="text" placeholder="Search" />
          <button>Add filter</button>
        </div>

        <div class="search-result-message-container">1 user found</div>

        <div class="data-grid-container">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>UID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users.items" :key="user.id">
                <td><input type="checkbox" /></td>
                <td>{{ user.id }}</td>
                <td>
                  <NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.createdAt }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const pageTitle = "Users";
const breadcrumbs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "#",
  },
];
const resourceServerOptions = useRuntimeConfig().public.resourceServer;

const {
  data: users,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServerOptions.baseAddress}/api/v1/users`);
</script>

<style>
.breadcrumb-container {
  background-color: yellowgreen;
}

.title-container {
  background-color: lightblue;
}

.content-container {
  background-color: lightcoral;
  display: flex;
}

.toolbar-container {
  background-color: lightcyan;
}
.message-bar-container {
  background-color: lightgray;
}
.data-grid-toolbar-container {
  background-color: lightgoldenrodyellow;
}

.search-result-message-container {
  background-color: lightgreen;
}
.data-grid-container {
  background-color: lightpink;
}

.side-nav-items-container {
  background-color: lightseagreen;

  a {
    display: block;
  }
}
</style>
