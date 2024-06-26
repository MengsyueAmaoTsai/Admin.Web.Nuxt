<template>
  <div>
    <button :title="title">
      <div>
        {{ name }}
      </div>
      <div>
        <img src="" alt="avatar" />
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
const name = "Mengsyue Tsai";
const email = "mengsyue.tsai@outlook.com";

const title = `Name: ${name}\nEmail: ${email}`;
</script>

<style></style>
