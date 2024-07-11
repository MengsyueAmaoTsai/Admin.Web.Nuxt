<template>
  <div class="search-box">
    <div class="search-box__wrapper">
      <div class="search-box__input-wrapper">
        <input
          class="search-box__input"
          type="text"
          placeholder="Search resources, services, and docs (G+/)"
          autocomplete="off"
          maxlength="100"
          role="combobox"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  flex: 0 10000 auto;
  position: relative;
  justify-content: center;

  width: 800px;
  min-width: 280px;
  max-width: 800px;

  margin-left: 7px;
  margin-right: 15px;
  outline: 0;
}

.search-box__wrapper {
  min-width: 364px;
  max-width: 520px;
  outline: 0;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 2px;
  font-size: 100%;
  font-weight: inherit;
}
.search-box__input-wrapper {
  font-size: 100%;
  font-weight: inherit;
  flex: 1 1 auto;
  height: 26px;
  outline: 0;
}

.search-box__input {
  font-size: 13px;

  border: 0;
  height: 26px;
  box-sizing: border-box;
  padding: 2px 8px 4px;
  width: 100%;
}
</style>
