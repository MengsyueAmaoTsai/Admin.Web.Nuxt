import type { User } from "oidc-client-ts";
import { useAuthStore } from "~/stores/auth";

const identityRoutes = ["/sign-in-callback"];

export default defineNuxtRouteMiddleware(async (to, from) => {
	console.log("---------- AuthenticationMiddleware ---------------");
	const authStore = useAuthStore();
	const authenticationService = useAuthenticationService();
	const localStorage = useLocalStorageManager();

	const user = (await authenticationService?.getUser()) as User;

	console.log("User => ", user);

	if (!user && !identityRoutes.includes(to.path)) {
		localStorage?.save("redirectUrl", to.path);
		authenticationService?.signIn();
		console.log("User not found, redirecting to sign-in");
	} else {
		authStore.captureUser(user);
		localStorage?.remove("redirectUrl");
		console.log("User found, proceeding to route");
	}

	console.log("---------- AuthenticationMiddleware ---------------");
});
