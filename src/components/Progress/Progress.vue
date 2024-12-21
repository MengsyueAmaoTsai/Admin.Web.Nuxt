<template>
  <div v-if="$props.visible">
    <fluent-progress
      :id="$props.id"
      :class="builtClassValue"
      :style="builtStyleValue"
      :min="$props.min"
      :max="$props.max"
      :value="$props.modelValue"
      :paused="$props.paused"
      ><slot />
    </fluent-progress>
  </div>
</template>

<script setup lang="ts">
enum ProgressStroke {
  Small = "Small",
  Normal = "Normal",
  Large = "Large",
}
const props = defineProps({
  id: String,
  classValue: String,
  styleValue: String,
  min: Number,
  max: Number,
  modelValue: Number,
  visible: {
    type: Boolean,
    default: true,
  },
  width: String,
  stroke: {
    type: String as PropType<ProgressStroke>,
    default: ProgressStroke.Normal,
  },
  color: String,
  backgroundColor: String,
  paused: Boolean,
});

const builtClassValue = new CssBuilder(props.classValue).build();

const builtStyleValue = new StyleBuilder(props.styleValue)
  .addStyle(
    "width",
    props.width,
    () =>
      props.width !== undefined && props.width !== null && props.width !== ""
  )
  .build();
</script>

<style></style>
