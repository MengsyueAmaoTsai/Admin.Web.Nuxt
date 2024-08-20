<template>
  <h1 class="top-bar-brand">
    <a class="top-bar-brand__link" href="/" role="button">Microsoft Azure</a>
  </h1>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.top-bar-brand {
  flex: 0 1 auto;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 0;
}

a {
  text-decoration: none;
}

[role="button"],
[role="link"] {
  cursor: pointer;
}

a[href] {
  -webkit-touch-callout: default;
}

.top-bar-brand__link {
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
  color: #fff;
}
</style>
