<template>
  <div>
    <div>
      <fluent-button appearance="accent" @click="navigateTo('/orders/new')"
        >New order</fluent-button
      >
    </div>

    <div>
      {{ orders.length }} order{{ orders.length <= 1 ? "" : "s" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="orders.length === 0">
          <td>No results.</td>
        </tr>

        <tr v-for="order of orders">
          <td><input type="checkbox" /></td>
          <td>
            {{ order.id }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { IOrderService, OrderResponse } from "~/resources/orders";

const orderService = useNuxtApp().$orderService as IOrderService;

const orders = ref<OrderResponse[]>([]);

onMounted(async () => {
  orders.value = await orderService.listOrders();
});
</script>
