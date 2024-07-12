import { User, UserManager, WebStorageStateStore } from "oidc-client-ts";

type IdentityOptions = {
	authority: string;
	clientId: string;
	clientSecret: string;
	responseType: string;
}

export class AuthenticationService {
	private readonly userManager: UserManager;

	public constructor(origin: string, options: IdentityOptions) {
		if (window !== undefined) {
			this.userManager = new UserManager({
				authority: options.authority,
				client_id: options.clientId,
				client_secret: options.clientSecret,
				response_type: options.responseType,
				scope: "openid profile email",
				redirect_uri: `${origin}/sign-in-callback`,
				silent_redirect_uri: `${origin}/silent-refresh`,
				post_logout_redirect_uri: `${origin}/sign-out-callback`,
				userStore: new WebStorageStateStore(),
				loadUserInfo: true,
			});
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
