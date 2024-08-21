<template>
  <a
    class="top-bar-button svg-flip-horizontal"
    title="Show portal menu"
    role="button"
  >
    <svg heigh="100%" width="100%" role="presentation" focusable="false">
      <use xlink:href="#Hamburger"></use>
    </svg>
  </a>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
svg {
  height: 16px;
  width: 16px;
  overflow: hidden;
}

.top-bar-button {
  display: flex;
  height: 40px;
  width: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
}

.top-bar-sidebar-collapse-button {
  display: flex;
  width: 48px;
}

@media (min-width: 640px) and (min-height: 500px) {
  .top-bar-sidebar-collapse-button {
    display: none;
  }
}

.mode-standard-contrast a {
  color: #1890f1;
}

.top-bar-button,
.mode-standard-contrast .top-bar-avatarmenu .dropmenu-button {
  fill: #fff;
}

.search-box,
.top-bar-button,
.top-bar-avatarmenu,
.top-bar-reportbug,
.top-bar-upgradebutton {
  -webkit-app-region: no-drag;
}
.svg-flip-horizontal > svg,
svg.msportalfx-svg-flip-horizontal {
  transform: scaleX(-1);
}

@media (min-width: 640px) and (min-height: 500px) {
  .sidebar-hamburger-mode .top-bar-sidebar-collapse-button {
    display: flex;
  }
}
</style>
