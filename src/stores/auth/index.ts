import { User } from "oidc-client-ts";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const currentUser = ref<User | null>(null);
	const isAuthenticated = computed(() => !!currentUser.value);
	const userId = computed(() => currentUser.value?.profile.sub ?? "");
	const tenantId = computed(() => currentUser.value?.profile.tenant_id ?? "");
	const accessToken = computed(() => currentUser.value?.access_token ?? "");

	function captureUser(user: User) {
		currentUser.value = user;
	}

	function revokeSession() {
		currentUser.value = null;
	}

	return {
		id: userId,
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
