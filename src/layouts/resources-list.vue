<template>
  <div class="web-container">
    <TopBar />

    <div>
      <div class="breadcrumb">Breadcrumb</div>

      <div>
        <div class="content-header">Content Header</div>

        <div>
          <div class="side-nav">SideNav</div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
