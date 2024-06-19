<script setup lang="ts">
const appConfig = useAppConfig();
const app = useNuxtApp();

const assemblyName = appConfig.nuxt.appId;
const assemblyVersion = appConfig.nuxt.version;
const nuxtVersion = app.versions.nuxt;
const vueVersion = app.versions.vue;
</script>

<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>Assembly Name</th>
          <td>{{ assemblyName }}</td>
        </tr>
        <tr>
          <th>Assembly Version</th>
          <td>{{ assemblyVersion }}</td>
        </tr>
        <tr>
          <th>Nuxt Version</th>
          <td>{{ nuxtVersion }}</td>
        </tr>
        <tr>
          <th>Vue Version</th>
          <td>{{ vueVersion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
