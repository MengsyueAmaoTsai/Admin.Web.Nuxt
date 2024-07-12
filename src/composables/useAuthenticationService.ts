import { authenticationService } from "~/identity/authentication.service";

export const useAuthenticationService = () => {
	if (process.server) {
		return;
	}

	return authenticationService;
};
