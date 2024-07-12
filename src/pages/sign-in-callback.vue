<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authenticationService = useAuthenticationService();
const localStorage = useLocalStorageManager();
const router = useRouter();
const authStore = useAuthStore();

async function handleCallback() {
  try {
    await authenticationService?.handleSignInCallback().then((user) => {
      if (user) {
        authStore.captureUser(user);
        const redirectUrl = localStorage.get("returnUrl");

        console.log(`Redirecting to ${redirectUrl}...`);

        router.push(redirectUrl);

        localStorage.remove("returnUrl");
      }
    });
  } catch (error) {}
}

onMounted(async () => {
  await handleCallback();
});
</script>

<style></style>
