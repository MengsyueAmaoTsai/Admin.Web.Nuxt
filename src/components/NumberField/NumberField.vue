<template>
  <div>
    <fluent-number-field
      :value="$props.modelValue"
      @change="changeHandler"
      @input="inputHandler"
    >
    </fluent-number-field>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", Number(target.value));
};

const changeHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", Number(target.value));
};
</script>
<style scoped lang="scss"></style>
