<template>
  <a class="side-bar-item-link" :title="props.text">
    <div class="side-bar-icon">
      <svg
        class="msportalfx-fill-success"
        xs
        style="height: 18px; width: 18px; fill: #95c353 !important"
        viewBox="0 0 16 16"
        role="presentation"
        focusable="false"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
      >
        <g><path d="M15.5 7.5v1h-7v7h-1v-7h-7v-1h7v-7h1v7z"></path></g>
      </svg>
    </div>

    <div class="side-bar-label">{{ props.text }}</div>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<style lang="scss" scoped>
.side-bar-item-link {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-height: 32px;
  -webkit-user-drag: none;
  color: inherit;
  box-sizing: border-box;
  padding: 7px 0;
  font-size: inherit;
  -webkit-touch-callout: default;
  color: #1890f1;
  color: inherit;
}

.side-bar-icon {
  height: 16px;
  padding-left: 15px;
  align-self: center;
  flex: 0 0 18px;
  fill: #fff;
}

.side-bar-label {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
}
</style>
