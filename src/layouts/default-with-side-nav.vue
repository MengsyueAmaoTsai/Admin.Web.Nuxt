<template>
  <div class="default-layout-with-side-nav">
    <AppTopBar />
    <div class="content">
      <div>test</div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
.content {
  display: flex;
}
</style>
