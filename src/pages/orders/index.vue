<template>
  <div>
    <h1>Orders</h1>

    <div>
      <button @click="$router.push('/orders/create')">New order</button>
      <button
        @click="console.log(selectedOrderIds)"
        :disabled="selectedOrderIds.length === 0"
      >
        Delete
      </button>
      <button @click="refreshData">Refresh</button>
    </div>

    <!-- User data -->
    <div v-if="orders.length === 0">No data</div>

    <table v-else>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="selectAll"
              @change="selectOrUnselectAll"
            />
          </th>
          <th>Id</th>
          <th>AccountId</th>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Created time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>
            <input
              type="checkbox"
              :value="order.id"
              v-model="selectedOrderIds"
            />
          </td>
          <td>
            <NuxtLink :to="`orders/${order.id}`">{{ order.id }}</NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`accounts/${order.accountId}`">{{
              order.accountId
            }}</NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`instruments/${order.symbol}`">{{
              order.symbol
            }}</NuxtLink>
          </td>

          <td>
            {{ order.quantity }}
          </td>

          <td>
            {{ order.createdTime }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const selectedOrderIds = ref<string[]>([]);
const selectAll = ref(false);

const {
  data: orders,
  error,
  execute,
  refresh,
} = await useFetch(`${resourceServiceOptions.baseAddress}/api/v1/orders`);

const selectOrUnselectAll = () => {
  if (selectAll.value) {
    selectedOrderIds.value = orders.value.map((user) => user.id);
  } else {
    selectedOrderIds.value = [];
  }
};

const refreshData = async () => {
  await refresh();
};
</script>
