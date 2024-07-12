import { User } from "oidc-client-ts";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const currentUser = ref<User | null>(null);
	const isAuthenticated = computed(() => !!currentUser.value);
	const userId = computed(() => currentUser.value?.profile.sub ?? "");
	const email = computed(() => currentUser.value?.profile.email ?? "");
	const tenantId = computed(() => currentUser.value?.profile.tenant_id ?? "");
	const accessToken = computed(() => currentUser.value?.access_token ?? "");

	function captureUser(user: User) {
		currentUser.value = user;
		console.log("Captured user", user);
	}

	function revokeSession() {
		currentUser.value = null;
	}

	return {
		id: userId,
		email,
		isAuthenticated,
		accessToken,
		tenantId,
		captureUser,
		revokeSession,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
