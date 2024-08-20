<template>
  <div style="flex: 0 0 auto; box-sizing: border-box">
    <div
      style="
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;
        z-index: 200;
      "
    >
      <button class="rc-dropdown-menu-button">
        <div class="top-bar-current-user-header">
          <div class="top-bar-current-user-info">
            <div class="top-bar-current-user-info__email">
              mengsyue.tsai@outlook.com
            </div>
            <div class="top-bar-current-user-info__name">
              Mengsyue Amao Tsai
            </div>
          </div>

          <div class="top-bar-current-user-image">
            <img
              class="top-bar-current-user__image"
              src="https://portal.azure.com/Content/static/MsPortalImpl/AvatarMenu/AvatarMenu_defaultAvatarSmall.png"
            />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
button,
input,
select,
textarea {
  font-family: az_ea_font, "Segoe UI", az_font, system-ui, -apple-system,
    BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-weight: 400;
  border-radius: 0;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  font-size: 13px;
  line-height: 1.385;
  background: none;
  color: inherit;
}

.rc-dropdown-menu-button {
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.top-bar-current-user-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.top-bar-current-user-info {
  text-align: left;
  flex: 1 1 auto;
  padding-left: 20px;
}

.top-bar-current-user-info__email,
.top-bar-current-user-info__name {
  max-width: 160px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: normal;
}

.top-bar-current-user-info__email {
  font-size: 14px;
}

.top-bar-current-user-info__name {
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
}
</style>
