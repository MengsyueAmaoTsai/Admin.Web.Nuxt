<template>
  <div class="portal">
    <TopBar> </TopBar>
    <slot />
  </div>

  <div class="splash-screen display-none"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.portal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: normal;
}

.splash-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  -webkit-app-region: drag;
}

@media (prefers-color-scheme: dark) {
  .splash-screen {
    background-color: #333;
  }
}

.display-none {
  display: none !important;
}

.hide-focus-outline {
  outline: 0 !important;
}
</style>
