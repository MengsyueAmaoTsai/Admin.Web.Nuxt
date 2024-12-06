<template>
  <div>
    <Button @click="navigateTo('/accounts')">Back to list</Button>

    <div v-if="account">
      <div class="row">
        <div>Id</div>
        <div>{{ account.id }}</div>
      </div>

      <div class="row">
        <div>User Id</div>
        <div>{{ account.userId }}</div>
      </div>

      <div class="row">
        <div>Name</div>
        <div>{{ account.name }}</div>
      </div>

      <div class="row">
        <div>Created time</div>
        <div>{{ account.createdTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  AccountDetailsResponse,
  IAccountService,
} from "~/resources/accounts";

const route = useRoute();
const accountId = ref<string>(route.params.accountId as string);

const accountService = useNuxtApp().$accountService as IAccountService;

const account = ref<AccountDetailsResponse | null>(null);

onMounted(async () => {
  account.value = await accountService.getAccount(accountId.value);
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  margin-bottom: 8px;
}
</style>
