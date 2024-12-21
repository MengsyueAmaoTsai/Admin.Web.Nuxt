<template>
  <div>
    <table
      :id="$props.id"
      :class="$props.classValue"
      :style="$props.styleValue"
      @onclosecolumnoptions="closeColumnOptions"
      @onclosecolumnresize="closeColumnResize"
    >
      <thead>
        <DataGridRow>Row Child content</DataGridRow>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  classValue: String,
  styleValue: String,
  items: {
    type: Array as PropType<any[]>,
    required: true,
  },
});

const closeColumnOptions = () => {
  console.log("closeColumnOptions");
};

const closeColumnResize = () => {
  console.log("closeColumnResize");
};
</script>

<style scoped lang="scss"></style>
