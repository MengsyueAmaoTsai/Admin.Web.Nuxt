import { AuthenticationService } from "~/identity/authentication.service";

export const useAuthenticationService = () => {
	if (process.server) {
		return;
	}

	const runtimeConfig = useRuntimeConfig().public;

	const service = new AuthenticationService(
		runtimeConfig.origin,
		runtimeConfig.identity,
	);

	return service;
};
