<template>
  <div class="portal">
    <TopBar />
    <slot />
  </div>
  <SvgProvider />
</template>

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
</style>
