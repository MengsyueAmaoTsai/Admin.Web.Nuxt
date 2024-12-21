<template>
  <div>
    <h4>Default example</h4>

    <Stack Style="border: 1px dotted var(--accent-fill-rest)">
      <div class="demo-panel">This is some content displayed in a div</div>
      <div class="demo-panel">This is some content displayed in a div</div>
    </Stack>

    <h4>Using the Stack component</h4>
    <p>Alignment of the Stack content elements:</p>
    <Stack>
      <div style="width: 150px">Horizontal</div>
      <div style="width: 150px">Vertical</div>
    </Stack>

    <p>Result:</p>

    <Stack> </Stack>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
