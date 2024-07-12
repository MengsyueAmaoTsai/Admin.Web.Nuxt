import { AuthenticationService } from "~/identity/authentication.service";

export const useAuthenticationService = () => {
	const runtimeConfig = useRuntimeConfig().public;
	
	const service = new AuthenticationService(runtimeConfig.origin, runtimeConfig.identity)

	if (process.server) {
		return;
	}

	return service;
};
