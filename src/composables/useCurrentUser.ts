import { useAuthStore } from "~/stores/auth";

export const useCurrentUser = () => {
	const store = useAuthStore();
	return {
		id: store.id,
		email: store.email,
		isAuthenticated: store.isAuthenticated,
	};
};
