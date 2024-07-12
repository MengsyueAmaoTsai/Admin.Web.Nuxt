<template>
  <div class="top-bar-root">
    <div class="top-bar-content" role="banner">
      <a class="collapse-button" role="button">
        <svg height="100%" width="100%" focusable="false" role="presentation">
          <rect x="3" y="6" width="18" height="2" />
          <rect x="3" y="11" width="18" height="2" />
          <rect x="3" y="16" width="18" height="2" />
        </svg>
      </a>

      <TopBarBrand></TopBarBrand>

      <div class="top-bar__search-box">
        <div class="top-bar__search-box-wrapper">
          <div class="search-icon-mini">
            <svg
              width="100%"
              height="100%"
              role="presentation"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="transform: scale(-1, 1)"
            >
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </div>

          <div class="top-bar__search-box-input-wrapper">
            <input
              type="text"
              class="top-bar__search-box-input"
              placeholder="Search resources, services, and docs (G+/)"
              autocomplete="off"
              maxlength="100"
            />
          </div>
        </div>
      </div>

      <TopBarAvatarButton></TopBarAvatarButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar-root {
  font-size: 13px;
  height: 40px;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  outline: 0 !important;
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

.collapse-button {
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  height: 40px;
  width: 48px;
}

.top-bar__search-box {
  position: relative;
  display: flex;
  margin-left: 7px;
  width: 800px;
  min-width: 280px;
  flex: 0 10000 auto;
  justify-content: center;
  max-width: 520px;
}
.top-bar__search-box-wrapper {
  min-width: 364px;
  max-width: 520px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 2px;
}

.top-bar__search-box-input-wrapper {
  height: 26px;
  flex: 1 1 auto;
}
.top-bar__search-box-input {
  border: 0;
  font-size: 13px;
  height: 26px;
  background-color: transparent;
  box-sizing: border-box;
  outline: 0;
  padding: 2px 8px 4px;
  width: 100%;
}

.search-icon-mini {
  padding: 0 2px 0 8px;
  box-sizing: border-box;
  height: 26px;
  width: 22px;
  display: flex;
  align-items: center;
}
</style>
