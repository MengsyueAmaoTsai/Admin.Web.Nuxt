<template>
  <div>
    <MessageBar />

    <div>
      <input type="text" placeholder="Search" />
    </div>

    <div>
      {{ signals.totalCount }}
      {{ signals.totalCount === 1 ? "signal" : "signals" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Time</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="signal in signals.items" :key="signal.id">
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <div>
              {{ signal.time }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: signals,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/signals`);
</script>

<style lang="scss" scoped></style>
