<template>
  <div>
    <!-- <div class="row">
      <label>Account Id</label>
      <input type="text" v-model="accountId" />
    </div> -->

    <!-- <div class="row">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>

    <div class="row">
      <label>Description</label>
      <input type="text" v-model="description" />
    </div>

    <div class="row">
      <label>Version</label>
      <input type="text" v-model="version" />
    </div>
    <div class="row">
      <label>Stage</label>
      <input type="text" v-model="stage" />
    </div> -->
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
