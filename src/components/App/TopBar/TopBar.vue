<template>
  <div class="top-bar__outer">
    <div class="top-bar__content">
      <!-- Hambuger button -->
      <a></a>

      <!-- Brand Application Name -->
      <h1 class="top-bar__brand">
        <a class="top-bar__brand__anchor">RichillCapital Admin Web</a>
      </h1>

      <!-- Search Box -->
      <div class="top-bar__search-box">
        <div class="top-bar__search-box-wrapper">
          <div class="top-bar__search-box__input-container">
            <input
              class="top-bar__search-box__input"
              type="text"
              placeholder="Search resources, services, and docs (G+/)"
              autocomplete="off"
              maxlength="100"
              role="combobox"
            />
          </div>
        </div>
      </div>

      <!-- Avatar Button -->
      <div>mengsyue.tsai@outlook.com</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.top-bar__outer {
  height: 40px;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  font-size: 13px;
  font-weight: inherit;
  line-height: normal;
}

.top-bar__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  font-size: 100%;
  font-weight: inherit;
  outline: 0 !important;
}

.top-bar__brand {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;
  font-size: 100%;
  font-weight: inherit;

  flex: 0 1 auto;
  outline: 0;
}
.top-bar__brand__anchor {
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
.top-bar__search-box {
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
.top-bar__search-box-wrapper {
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
.top-bar__search-box__input-container {
  font-size: 100%;
  font-weight: inherit;
  flex: 1 1 auto;
  height: 26px;
  outline: 0;
}

.top-bar__search-box__input {
  font-size: 13px;

  border: 0;
  height: 26px;
  box-sizing: border-box;
  padding: 2px 8px 4px;
  width: 100%;
}
</style>
