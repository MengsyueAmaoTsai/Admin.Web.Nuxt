<template>
  <div>ICurrentUser{{ currentUser }}</div>
</template>

<script lang="ts" setup>
const router = useRouter();
const authenticationService = useAuthenticationService();
const currentUser = useCurrentUser();
</script>
<style lang="scss" scoped></style>
