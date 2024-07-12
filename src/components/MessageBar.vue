<template>
  <div class="message-bar">
    <div class="message-bar-content">
      <div class="message-bar-icon"></div>

      <div class="message-bar-text" role="status">
        <span class="message-bar-inner-text">
          <a class="message-bar-link">This is message bar inner text</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.message-bar {
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  font-weight: 400;
  background: rgb(0, 36, 91);
  box-sizing: border-box;
  color: rgb(243, 242, 241);
  min-height: auto;
  width: calc(100% - 2px);
  display: flex;
  word-break: break-word;
  flex-direction: column;
  border: 1px solid rgb(0, 36, 91);
}

.message-bar-content {
  display: flex;
  width: 100%;
  line-height: normal;
}

.message-bar-text {
  min-width: 0px;
  display: flex;
  flex-grow: 1;
  margin: 8px 12px 8px 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  font-weight: 400;
}

.message-bar-inner-text {
  line-height: 16px;
}

.message-bar-link {
  -webkit-font-smoothing: antialiased;
  font-size: 13px;
  font-weight: inherit;
  color: rgb(40, 153, 245);
  color: rgb(108, 184, 246);
  outline: none;
  text-decoration: none;
  line-height: 18px;
  overflow-wrap: break-word;
  display: block;
  text-decoration: underline;
  padding-left: 4px;
}
</style>
