<template>
  <div v-if="$props.visible">
    <fluent-progress-ring
      :id="$props.id"
      :class="$props.classValue"
      :style="$props.styleValue"
      :min="$props.min"
      :max="$props.max"
      :value="$props.modelValue"
    >
      <slot></slot>
    </fluent-progress-ring>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  classValue: String,
  styleValue: String,
  min: Number,
  max: Number,
  visible: {
    type: Boolean,
    default: true,
  },
  paused: Boolean,
  modelValue: Number,
});
</script>
<style scoped lang="scss"></style>
