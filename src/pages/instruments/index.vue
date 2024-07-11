<template>
  <div>
    <div>
      <button>Refresh</button>
      <button>Manage View</button>
      <button>Delete</button>
    </div>

    <MessageBar />

    <div>
      <input type="text" placeholder="Search" />
    </div>

    <div>
      {{ instruments.totalCount }}
      {{ instruments.totalCount === 1 ? "instrument" : "instruments" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Symbol</th>
          <th>Description</th>
          <th>Exchange</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="instrument in instruments.items" :key="instrument.id">
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <div>
              <NuxtLink :to="`instruments/${instrument.symbol}`">{{
                instrument.symbol
              }}</NuxtLink>
            </div>
          </td>

          <td>
            <div>
              {{ instrument.description }}
            </div>
          </td>

          <td>
            <div>
              {{ instrument.exchange }}
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
  data: instruments,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/instruments`);
</script>

<style lang="scss" scoped></style>
