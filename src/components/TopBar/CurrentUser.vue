<template>
  <div class="current-user">
    <button class="current-user-menu-button">
      <div
        class="current-user-menu-header"
        :title="`Name: ${currentUser.name}\nEmail: ${currentUser.email}`"
      >
        <div class="current-user-info-container">
          <div class="current-user-email">{{ currentUser.email }}</div>
          <div class="current-user-name">{{ currentUser.name }}</div>
        </div>

        <div class="current-user-avatar-container">
          <img class="current-user-avatar-image" :src="currentUser.avatar" />
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
const currentUser = {
  name: "Mengsyue Amao Tsai",
  email: "mengsyue.tsai@outlook.com",
  avatar: "https://avatars.githubusercontent.com/u/88216325",
};
</script>

<style>
.current-user {
  position: relative;
  flex: 0 0 auto;
  box-sizing: border-box;
  z-index: 200;
}

.current-user-menu-button {
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
  fill: #fff;
}

.current-user-menu-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.current-user-info-container {
  text-align: left;
  flex: 1 1 auto;
  padding-left: 20px;
}

.current-user-email {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: normal;
  max-width: 160px;
}

.current-user-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 10px;
  line-height: normal;
  text-transform: uppercase;
  max-width: 160px;
}

.current-user-avatar-container {
  height: 28px;
  width: 28px;
  flex: 0 0 auto;
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: content-box;
}

.current-user-avatar-image {
  height: 28px;
  width: 28px;
  border: 0;
  border-radius: 28px;
}
</style>
