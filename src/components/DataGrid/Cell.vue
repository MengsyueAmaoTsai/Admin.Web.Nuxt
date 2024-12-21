<template>
  <div>
    <td
      v-if="$props.cellType === 'Default'"
      :class="$props.classValue"
      :style="$props.styleValue"
      role="gridcell"
      tabindex="0"
      @keydown="handleOnCellKeyDown"
      @click="handleOnCellClick"
    >
      <slot />
    </td>

    <th
      v-else
      :class="$props.classValue"
      :style="$props.styleValue"
      @keydown="handleOnCellKeyDown"
      @click="handleOnCellClick"
    >
      <slot />
    </th>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  classValue: String,
  styleValue: String,

  cellType: {
    type: String,
    default: "Default",
  },
});

const handleOnCellKeyDown = () => {
  console.log("handleOnCellKeyDown");
};

const handleOnCellClick = () => {
  console.log("handleOnCellClick");
};
</script>

<style scoped lang="scss"></style>
