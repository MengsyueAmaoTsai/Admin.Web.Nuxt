<template>
  <div class="top-bar un-selectable">
    <div class="top-bar-content">
      <!-- <TopBarHamburger /> -->
      <TopBarButton icon="Hamburger" tooltip-text="Show portal menu" />

      <h1 class="top-bar-brand">
        <a class="top-bar-brand__link">Microsoft Azure</a>
      </h1>

      <div class="top-bar-placeholder"></div>
      <TopBarSearch></TopBarSearch>

      <div class="top-bar-buttons">
        <TopBarButton icon="CloudShell" tooltip-text="Cloud Shell" />

        <div class="top-bar-notifications">
          <TopBarButton icon="Notifications" tooltip-text="Notifications" />
        </div>
        <TopBarButton icon="Settings" tooltip-text="Settings" />
      </div>

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
  background-color: #252423;
  color: #fff;
}

.top-bar-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-app-region: drag;
  display: flex;
  align-content: center;
  align-items: center;
}

.top-bar-brand,
.top-bar-preview {
  flex: 0 1 auto;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;
}

.top-bar-brand__link {
  color: #fff;
}

.top-bar-preview .top-bar-brand__link .top-bar-internal,
.top-bar-brand {
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

.top-bar-placeholder {
  flex: 1 1 auto;
}

.top-bar-buttons {
  display: flex;
  flex: 0 0 auto;
}

.top-bar-notifications {
  position: relative;
}
</style>
