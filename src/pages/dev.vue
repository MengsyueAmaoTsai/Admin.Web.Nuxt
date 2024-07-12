<template>
  <div>Development page</div>
</template>

<script lang="ts" setup>
const router = useRouter();
const authenticationService = useAuthenticationService();

async function authenticate() {
  try {
    await authenticationService.signIn();
    router.push("/");
  } catch (error) {
    console.error("Failed to sign in.", error);
  }
}

// await authenticate();
</script>
<style lang="scss" scoped></style>
