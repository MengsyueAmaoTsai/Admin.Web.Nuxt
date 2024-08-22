<template>
  <div class="side-bar">
    <nav class="side-bar-nav">
      <div class="side-bar-header">
        <button class="side-bar-hamburger" title="Hide portal menu">
          <div class="side-bar-icon">
            <svg
              style="height: 16px; width: 16px"
              height="100%"
              width="100%"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <use href="#Hamburger"></use>
            </svg>
          </div>
        </button>
        <a class="side-bar-menu-toggle-link"></a>
        <div class="side-bar-divider"></div>
      </div>

      <div class="side-bar-top"></div>

      <div class="side-bar-favorites"></div>

      <div class="side-bar-middle"></div>

      <div class="side-bar-menu-container"></div>

      <div class="side-bar-shadow"></div>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.side-bar {
  z-index: 6;
  height: 100%;
  font-size: 13px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 640px) and (min-height: 500px) {
  .side-bar {
    position: fixed;
  }
}

@media (min-width: 1024px) and (min-height: 500px) {
  .side-bar {
    position: fixed;
  }
}

.side-bar-nav {
  width: 225px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.26),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.22);
  color: #fff;
  background-color: #323130;
}

.side-bar-hamburger {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-height: 32px;
  -webkit-user-drag: none;
  color: inherit;
  box-sizing: border-box;
  padding: 7px 0;
  color: inherit;
  display: flex;
  border: 0;
  padding: 0;
  width: 100%;
  height: 40px;
}

@media (min-width: 640px) and (min-height: 500px) {
  .side-bar-hamburger {
    display: flex;
  }
}

.side-bar-icon {
  height: 16px;
  padding-left: 15px;
  align-self: center;
  flex: 0 0 18px;
  fill: #fff;
}
</style>
