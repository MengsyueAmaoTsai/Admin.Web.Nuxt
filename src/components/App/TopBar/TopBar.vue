<template>
  <div class="top-bar__outer">
    <div class="top-bar__content">
      <!-- Hambuger button -->
      <a></a>

      <!-- Brand Application Name -->
      <AppTopBarBrand />
      <AppTopBarSearchBox />

      <!-- Avatar Button -->
      <div>
        <button @click="toggleAvatarMenu">mengsyue.tsai@outlook.com</button>

        <div class="avatar-menu" v-if="isAvatarMenuVisible">
          <div class="current-user-company">
            <div>Microsoft</div>
          </div>

          <div class="current-user-spacer"></div>

          <div class="current-user-info">
            <a class="current-user-avatar"></a>

            <div class="current-user-details">
              <div>mengsyue.tsai@outlook.com</div>
              <div>mengsyue.tsai@outlook.com</div>
              <div>
                <a href="https://localhost:9999/profile" target="_blank"
                  >My profile</a
                >
              </div>
            </div>
          </div>

          <a href="">Sign out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAvatarMenuVisible = ref(false);

function toggleAvatarMenu() {
  isAvatarMenuVisible.value = !isAvatarMenuVisible.value;
}
</script>

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

.avatar-menu {
  right: 0;
  top: 100%;
  position: absolute;
}
</style>
