import { useAuthStore } from "~/stores/auth";

const identityRoutes = ["/sign-in-callback", "/sign-out-callback"];

export default defineNuxtRouteMiddleware(async (to, from) => {
	console.log("---------- AuthenticationMiddleware ---------------");

	if (process.server) {
		return;
	}

	const authStore = useAuthStore();
	const authenticationService = useAuthenticationService();
	const localStorage = useLocalStorageManager();

	if (!authStore.isAuthenticated && !identityRoutes.includes(to.path)) {
		localStorage?.save("returnUrl", to.path);
		authenticationService?.signIn();
		console.log("User not found, redirecting to sign-in");
	} else {
		console.log("User found, proceeding to route");
	}

	console.log("---------- AuthenticationMiddleware ---------------");
});
