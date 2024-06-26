<template>
  <div class="top-bar">
    <Brand />

    <div>
      <input
        type="text"
        placeholder="Search resources, services, and docs (G+/)"
      />
    </div>
    <div class="top-bar-buttons">
      <a title="Notifications">Notifications</a>
      <a title="Settings">Settings</a>
    </div>

    <AvatarMenu />
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
}
</style>
