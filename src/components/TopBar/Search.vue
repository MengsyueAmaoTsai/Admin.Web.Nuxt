<template>
  <div class="top-bar-search">
    <div class="top-bar-search-icon">
      <svg height="100%" width="100%" role="presentation" focusable="false">
        <use href="#Search"></use>
      </svg>
    </div>

    <div class="top-bar-search-input-container">
      <input
        class="top-bar-search__input"
        type="text"
        placeholder="Search resources, services, and docs (G+/)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.top-bar-search {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 2px;
  background-color: #605e5c;
}

.top-bar-search-icon {
  padding: 0 2px 0 8px;
  box-sizing: border-box;
  height: 26px;
  width: 22px;
  display: flex;
  align-items: center;
}

.top-bar-search-icon svg {
  height: 12px;
  width: 12px;
}

.top-bar-search-input-container {
  height: 26px;
  flex: 1 1 auto;
  -webkit-app-region: no-drag;
}

.top-bar-search__input {
  border: 0;
  font-size: 13px;
  height: 26px;
  background-color: transparent;
  box-sizing: border-box;
  outline: 0;
  padding: 2px 8px 4px;
  width: 100%;
  color: #fff;
  border-color: #a19f9d;
}

.top-bar-search__input::placeholder {
  color: #fff;
}
</style>
