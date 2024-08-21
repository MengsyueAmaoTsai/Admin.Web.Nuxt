<template>
  <a class="top-bar-button" :title="tooltipText">
    <svg heigh="100%" width="100%" role="presentation" focusable="false">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: String,
  tooltipText: String,
});
</script>

<style lang="scss" scoped>
.top-bar-button {
  -webkit-app-region: no-drag;
  display: flex;
  height: 40px;
  width: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #1890f1;
  fill: #fff;
}

.top-bar-button svg {
  height: 16px;
  width: 16px;
}
</style>
