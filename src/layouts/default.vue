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
  font-size: 13px;
  font-weight: inherit;
  line-height: normal;

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
}
</style>
