import { User, UserManager, WebStorageStateStore } from "oidc-client-ts";

class AuthenticationService {
	private readonly userManager: UserManager;

	public constructor() {
		const origin = "http://localhost:9995";

		if (window !== undefined) {
			const options = {
				authority: "https://localhost:9999",
				client_id: "RichillCapital.Admin.Web.Nuxt",
				client_secret: "secret",
				response_type: "code",
				redirect_uri: `${origin}/sign-in-callback`,
				silent_redirect_uri: `${origin}/silent-refresh`,
				post_logout_redirect_uri: `${origin}`,
				scope: "openid profile email",
				userStore: new WebStorageStateStore(),
				loadUserInfo: true,
			};

			this.userManager = new UserManager(options);
		}
	}

	public signIn(): Promise<void> {
		return this.userManager.signinRedirect();
	}

	public handleSignInCallback(): Promise<User> {
		return this.userManager.signinCallback() as Promise<User>;
	}

	public getUser(): Promise<User | null> {
		return this.userManager.getUser();
	}
}

export const authenticationService = new AuthenticationService();
