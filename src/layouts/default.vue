<template>
  <div class="web-container">
    <AppTopBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.web-container {
  font-weight: inherit;
  outline: 0;
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
