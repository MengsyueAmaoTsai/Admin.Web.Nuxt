<template>
  <div></div>
</template>

<script lang="ts" setup>
const authenticationService = useAuthenticationService();
const localStorage = useLocalStorageManager();
const router = useRouter();

async function handleCallback() {
  try {
    const _ = await authenticationService.handleSignInCallback();

    const redirectUrl = localStorage.get("returnUrl");
    console.log(`Redirecting to ${redirectUrl}...`);
    router.push(redirectUrl);
    localStorage.remove("returnUrl");
  } catch (error) {}
}

await handleCallback();
</script>

<style></style>
