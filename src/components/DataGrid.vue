<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(key, index) in columnKeys" :key="index">
            {{ key }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, rowIndex) in items" :key="rowIndex">
          <td v-for="(key, colIndex) in columnKeys" :key="colIndex">
            {{ item[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array as () => Array<Record<string, any>>,
    required: true,
  },
});

const columnKeys = computed(() => {
  return props.items.length > 0 ? Object.keys(props.items[0]) : [];
});
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

thead {
  background-color: #f4f4f4;
}
</style>
