import { User } from "oidc-client-ts";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const currentUser = ref<User | null>(null);

	const accessToken = computed(() => currentUser.value?.access_token ?? "");
	const isAuthenticated = computed(() => !!currentUser.value);

	const captureUser = (user: User) => {
		currentUser.value = user;
	};

	const revokeSession = () => {
		currentUser.value = null;
	};

	const tenantId = computed(() => currentUser.value?.profile.tenant_id ?? "");

	return {
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
