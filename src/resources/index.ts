type ErrorResponse = {
	status: number;
	type: string;
	title: string;
	detail: string;
};

type CreatedResponse = {
	id: string;
};

export type UserCreatedResponse = CreatedResponse;

export type CreateUserRequest = {
	email: string;
	name: string;
	password: string;
};

export type UserResponse = {
	id: string;
	email: string;
	name: string;
	createdTime: Date;
};

export type CreateInstrumentRequest = {
	symbol: string;
	description: string;
	type: string;
};

export type InstrumentCreatedResponse = CreatedResponse;

export type UserDetailsResponse = UserResponse;

export type InstrumentResponse = {
	id: string;
	symbol: string;
	description: string;
	type: string;
	createdTime: Date;
};

export type InstrumentDetailsResponse = InstrumentResponse;

export type CreateAccountRequest = {
	userId: string;
	name: string;
};
export type AccountCreatedResponse = CreatedResponse;

export type AccountResponse = {
	id: string;
	userId: string;
	name: string;
	createdTime: Date;
};

export type CreateSignalSourceRequest = {
	id: string;
	name: string;
	description: string;
	version: string;
}

export type SignalSourceCreatedResponse = CreatedResponse;

export type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	version: string;
	createdTime: Date;
}

export type SignalSourceDetailsResponse = SignalSourceResponse;

export type AccountDetailsResponse = AccountResponse;

export interface IResourceService {
	listUsers(): Promise<UserResponse[]>;
	createUser(request: CreateUserRequest): Promise<UserCreatedResponse>;
	getUser(id: string): Promise<UserDetailsResponse>;
	deleteUser(id: string): Promise<void>;

	listInstruments(): Promise<InstrumentResponse[]>;
	createInstrument(
		request: CreateInstrumentRequest,
	): Promise<InstrumentCreatedResponse>;
	getInstrument(symbol: string): Promise<InstrumentDetailsResponse>;

	listAccounts(): Promise<AccountResponse[]>;
	createAccount(request: CreateAccountRequest): Promise<AccountCreatedResponse>;
	getAccount(id: string): Promise<AccountDetailsResponse>;

	createSignalSource(request: CreateSignalSourceRequest): Promise<SignalSourceCreatedResponse>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSource(id: string): Promise<SignalSourceDetailsResponse>;
}

type ResourceOptions = {
	baseAddress: string;
};

class ResourceService implements IResourceService {
	public constructor(private readonly options: ResourceOptions) {}

	public async listUsers(): Promise<UserResponse[]> {
		return await this.invoke<UserResponse[]>("GET", "/api/v1/users");
	}

	public async createUser(
		request: CreateUserRequest,
	): Promise<UserCreatedResponse> {
		return this.invoke<UserCreatedResponse>("POST", "/api/v1/users", request);
	}

	public async getUser(id: string): Promise<UserDetailsResponse> {
		return await this.invoke<UserDetailsResponse>("GET", `/api/v1/users/${id}`);
	}

	public async deleteUser(id: string): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public async listInstruments(): Promise<InstrumentResponse[]> {
		return await this.invoke<InstrumentResponse[]>(
			"GET",
			"/api/v1/instruments",
		);
	}

	public async createInstrument(
		request: CreateInstrumentRequest,
	): Promise<InstrumentCreatedResponse> {
		return this.invoke<InstrumentCreatedResponse>(
			"POST",
			"/api/v1/instruments",
			request,
		);
	}

	public async getInstrument(
		symbol: string,
	): Promise<InstrumentDetailsResponse> {
		return await this.invoke<InstrumentDetailsResponse>(
			"GET",
			`/api/v1/instruments/${symbol}`,
		);
	}

	public async listAccounts(): Promise<AccountResponse[]> {
		return await this.invoke<AccountResponse[]>("GET", "/api/v1/accounts");
	}

	public async createAccount(
		request: CreateAccountRequest,
	): Promise<AccountCreatedResponse> {
		return this.invoke<AccountCreatedResponse>(
			"POST",
			"/api/v1/accounts",
			request,
		);
	}

	public async getAccount(id: string): Promise<AccountDetailsResponse> {
		return await this.invoke<AccountDetailsResponse>(
			"GET",
			`/api/v1/accounts/${id}`,
		);
	}

	public async createSignalSource(
		request: CreateSignalSourceRequest,
	): Promise<SignalSourceCreatedResponse> {
		return this.invoke<SignalSourceCreatedResponse>(
			"POST",
			"/api/v1/signal-sources",
			request,
		);
	}

	public async listSignalSources(): Promise<SignalSourceResponse[]> {
		return await this.invoke<SignalSourceResponse[]>("GET", "/api/v1/signal-sources");
	}

	public async getSignalSource(id: string): Promise<SignalSourceDetailsResponse> {
		return await this.invoke<SignalSourceDetailsResponse>(
			"GET",
			`/api/v1/signal-sources/${id}`,
		);
	}

	private async invoke<TResponse>(
		method: string,
		path: string,
		body?: object,
	): Promise<TResponse> {
		const fullUrl = `${this.options.baseAddress}${path}`;

		const response = await fetch(fullUrl, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const errorResponse = (await response.json()) as ErrorResponse;
			throw new Error(
				`Error ${errorResponse.status}: ${errorResponse.title} - ${errorResponse.detail}`,
			);
		}

		return (await response.json()) as TResponse;
	}
}

export const resourceServiceSingleton = new ResourceService({
	baseAddress: "https://localhost:10000",
}) as IResourceService;
