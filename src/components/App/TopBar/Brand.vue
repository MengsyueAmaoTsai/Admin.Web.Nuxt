<template>
  <div>
    <h1 class="brand">
      <a class="brand__link">RichillCapital Admin Web</a>
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.brand {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;
  font-size: 100%;
  font-weight: inherit;

  flex: 0 1 auto;
  outline: 0;
}

.brand__link {
  display: inline-block;
  font-size: 15px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  box-sizing: border-box;
}
</style>
