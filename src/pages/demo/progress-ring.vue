<template>
  <div>
    <h4>Default</h4>
    <div
      style="
        width: 300px;
        display: grid;
        grid-gap: 12px;
        grid-auto-flow: column;
      "
    >
      <ProgressRing :min="0" :max="100" v-model="fixedValue"></ProgressRing>
      <ProgressRing></ProgressRing>
    </div>

    <h4>Stroke and Color</h4>

    <h4>Paused</h4>
  </div>
</template>

<script setup lang="ts">
const fixedValue = 75;
</script>

<style></style>
