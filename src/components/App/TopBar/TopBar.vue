<template>
  <div class="top-bar__outer">
    <div class="top-bar__content">
      <!-- Hambuger button -->
      <a></a>

      <!-- Brand Application Name -->
      <h1 class="top-bar__brand">
        <a class="top-bar__brand__anchor">RichillCapital Admin Web</a>
      </h1>

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

.top-bar__brand {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;
  font-size: 100%;
  font-weight: inherit;

  flex: 0 1 auto;
  outline: 0;
}
.top-bar__brand__anchor {
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
