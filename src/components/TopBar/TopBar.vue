<template>
  <div class="top-bar">
    <div class="top-bar-content">
      <TopBarHamburger />

      <h1><a>Microsoft Azure</a></h1>

      <TopBarSearch></TopBarSearch>

      <div class="top-bar-buttons"></div>

      <TopBarCurrentUser></TopBarCurrentUser>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.top-bar {
  height: 40px;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  font-size: 13px;
}
</style>
