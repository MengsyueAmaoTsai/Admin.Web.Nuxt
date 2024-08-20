<template>
  <div class="top-bar">
    <div class="top-bar-content">
      <TopBarHamburgerButton></TopBarHamburgerButton>
      <TopBarBrand></TopBarBrand>
      <TopBarSearch></TopBarSearch>
      <TopBarButtons></TopBarButtons>
      <TopBarCurrentUser></TopBarCurrentUser>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.top-bar {
  background-color: #252423;
  color: #fff;
  height: 40px;
  position: relative;
  font-size: 13px;
  flex: 0 0 auto;
  z-index: 5;
}

.top-bar-content {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  align-content: center;
  -webkit-app-region: drag;
}
</style>
