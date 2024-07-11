<template>
  <div class="top-bar__outer">
    <div class="top-bar__content">
      <!-- Hambuger button -->
      <a></a>

      <!-- Brand Application Name -->
      <AppTopBarBrand />
      <AppTopBarSearchBox />

      <!-- Avatar Button -->
      <div>mengsyue.tsai@outlook.com</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.top-bar__outer {
  height: 40px;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  font-size: 13px;
  font-weight: inherit;
  line-height: normal;
}

.top-bar__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  font-size: 100%;
  font-weight: inherit;
  outline: 0 !important;
}
</style>
