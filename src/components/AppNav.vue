<template>
  <div>
    <header>
      <ul>
        <li v-for="item in menuItems">
          <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Files",
    path: "/files",
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
