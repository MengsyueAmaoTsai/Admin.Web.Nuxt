<template>
  <div>
    <div class="row">
      <label>Account Id</label>
      <input type="text" v-model="accountId" />
    </div>

    <div class="row">
      <label>Symbol</label>
      <input type="text" v-model="symbol" />
    </div>

    <div class="row">
      <label>Trade type</label>

      <input type="radio" value="Buy" v-model="tradeType" /> Buy
      <input type="radio" value="Sell" v-model="tradeType" /> Sell
    </div>

    <div class="row">
      <label>Order type</label>

      <input type="radio" value="Market" v-model="orderType" /> Market
      <input type="radio" value="Limit" v-model="orderType" /> Limit
    </div>

    <div class="row">
      <label>Time in force</label>

      <input type="radio" value="DAY" v-model="timeInForce" /> DAY
      <input type="radio" value="IOC" v-model="timeInForce" /> IOC
      <input type="radio" value="FOK" v-model="timeInForce" /> FOK
    </div>

    <div class="row">
      <label>Quantity</label>
      <input type="number" v-model="quantity" />
    </div>

    <div class="row">
      <Button @click="createUser">Create</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IOrderService } from "~/resources/orders";

const orderService = useNuxtApp().$orderService as IOrderService;

const accountId = ref("");
const symbol = ref("");
const tradeType = ref("");
const orderType = ref("");
const timeInForce = ref("");
const quantity = ref(0);

const createUser = async () => {
  try {
    const createdResponse = await orderService.createOrder({
      accountId: accountId.value,
      symbol: symbol.value,
      tradeType: tradeType.value,
      orderType: orderType.value,
      timeInForce: timeInForce.value,
      quantity: quantity.value,
    });

    alert(`ORder ${createdResponse.id} created`);
    navigateTo("/orders");
  } catch (error) {
    alert(`Failed to create order: ${error}`);
  }
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 1rem;
}
</style>
