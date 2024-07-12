<template>
  <div class="avatar-button-root">
    <button class="avatar-button">
      <div class="avatar-button__header">
        <div class="avatar-button__container">
          <div class="avatar-button__email">mengsyue.tsai@outlook.com</div>
        </div>

        <div class="avatar-button__image-container">
          <img
            class="avatar-button__image"
            src="https://avatars.githubusercontent.com/u/88216325"
          />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.avatar-button-root {
  position: relative;
  flex: 0 0 auto;
  box-sizing: border-box;
  z-index: 200;
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

.avatar-button {
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.avatar-button__header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.avatar-button__container {
  text-align: right;
  flex: 1 1 auto;
  padding-left: 20px;
}

.avatar-button__email {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: normal;
  max-width: 160px;
}

.avatar-button__image-container {
  height: 28px;
  width: 28px;
  flex: 0 0 auto;
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: content-box;
}

img {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
}

.avatar-button__image {
  height: 28px;
  width: 28px;
  border: 0;
  border-radius: 28px;
}
</style>
