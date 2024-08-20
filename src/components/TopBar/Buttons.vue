<template>
  <div class="top-bar-buttons-container">
    <TopBarNotifications></TopBarNotifications>

    <a class="top-bar-settings" title="settings">
      Settings
      <svg
        height="100%"
        width="100%"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <use href="#FxSymbol0-009"></use>
      </svg>
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.top-bar-buttons-container {
  display: flex;
  flex: 0 0 auto;
}
</style>
