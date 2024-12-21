<template>
  <div>
    <tr
      :class="$props.classValue"
      :style="$props.styleValue"
      role="row"
      @click="handleOnRowClick"
      @dblclick="handleOnRowDoubleClick"
      @keydown="handleOnRowKeyDown"
    >
      <slot />
    </tr>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  classValue: String,
  styleValue: String,
});

const handleOnRowClick = () => {
  console.log("handleOnRowClick");
};

const handleOnRowDoubleClick = () => {
  console.log("handleOnRowDoubleClick");
};

const handleOnRowKeyDown = () => {
  console.log("handleOnRowKeyDown");
};
</script>
