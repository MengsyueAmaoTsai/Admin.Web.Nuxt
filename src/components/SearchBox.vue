<template>
  <div class="search-box">
    <div></div>
    <input
      class="field"
      maxlength="512"
      placeholder="Search"
      role="searchbox"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.search-box {
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  font-weight: 400;
  box-shadow: none;
  margin: 0px;
  padding: 1px 0px 1px 4px;
  box-sizing: border-box;
  color: rgb(243, 242, 241);
  display: flex;
  flex-flow: row;
  align-items: stretch;
  border-radius: 2px;
  // background-color: rgb(27, 26, 25);
  // border: 1px solid rgb(138, 136, 134);
  height: 24px;
  min-width: 200px;
  margin-right: 8px;
}

.field {
  box-shadow: none;
  margin: 0px;
  padding: 0px 0px 0.5px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
  flex: 1 1 0px;
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
  // color: rgb(243, 242, 241);
}
</style>
