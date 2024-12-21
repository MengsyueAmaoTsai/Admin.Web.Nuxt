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
      <Progress :min="0" :max="100" v-model="pausedValue"></Progress>
      <Progress></Progress>
    </div>
    <h4>Stroke and Color</h4>

    <h4>Paused</h4>
    <div
      style="
        width: 300px;
        display: grid;
        grid-gap: 12px;
        grid-auto-flow: column;
      "
    >
      <Progress
        :paused="true"
        :min="0"
        :max="100"
        v-model="pausedValue"
      ></Progress>
      <Progress :paused="true"></Progress>
    </div>
  </div>
</template>

<script setup lang="ts">
const pausedValue = 75;
</script>
