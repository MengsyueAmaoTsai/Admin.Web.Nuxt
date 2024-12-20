<template>
  <div>
    <fluent-text-field
      :value="$props.modelValue"
      :placeholder="$props.placeholder"
      @input="inputHandler"
      @change="changeHandler"
    ></fluent-text-field>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const changeHandler = (event: Event) => {};
</script>

<style scoped lang="scss"></style>
