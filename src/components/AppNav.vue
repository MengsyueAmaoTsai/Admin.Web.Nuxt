<template>
  <div>
    <header>
      <ul>
        <li v-for="item in menuItems">
          <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
        </li>
        <li v-if="!isAuthenticated">
          <a @click="signIn" href="javascript:void(0)">Sign In</a>
        </li>
        <li v-if="isAuthenticated">
          <a @click="signOut" href="javascript:void(0)">Sign Out</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup lang="ts">
const isAuthenticated = false;

const signIn = () => {
  console.log("Sign in");
};

const signOut = () => {
  console.log("Sign out");
};

const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Settings",
    path: "/settings",
  },
  {
    title: "Files",
    path: "/files",
  },
  {
    title: "Audit Logs",
    path: "/audit-logs",
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "Signal Sources",
    path: "/signal-sources",
  },
  {
    title: "Signals",
    path: "/signals",
  },
  {
    title: "About",
    path: "/about",
  },
];
</script>
