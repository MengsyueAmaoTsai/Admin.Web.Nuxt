import type { CreatedResponse, IHttpRequestHandler } from "./shared";

export type CreateAccountRequest = {
	userId: string;
	name: string;
};
export type AccountCreatedResponse = CreatedResponse;
export type AccountDetailsResponse = AccountResponse;

export type AccountResponse = {
	id: string;
	userId: string;
	name: string;
	createdTime: Date;
};

export interface IAccountService {
	listAccounts(): Promise<AccountResponse[]>;
	createAccount(request: CreateAccountRequest): Promise<AccountCreatedResponse>;
	getAccount(accountId: string): Promise<AccountDetailsResponse>;
	deleteAccount(accountId: string): Promise<void>;
}

export class AccountService implements IAccountService {
	public constructor(private readonly requestHandler: IHttpRequestHandler) {}

	public async listAccounts(): Promise<AccountResponse[]> {
		return await this.requestHandler.invoke<AccountResponse[]>(
			"GET",
			"/api/v1/accounts",
		);
	}

	public async createAccount(
		request: CreateAccountRequest,
	): Promise<AccountCreatedResponse> {
		return this.requestHandler.invoke<AccountCreatedResponse>(
			"POST",
			"/api/v1/accounts",
			request,
		);
	}

	public async getAccount(accountId: string): Promise<AccountDetailsResponse> {
		return await this.requestHandler.invoke<AccountDetailsResponse>(
			"GET",
			`/api/v1/accounts/${accountId}`,
		);
	}

	public async deleteAccount(accountId: string): Promise<void> {
		await this.requestHandler.invoke<void>(
			"DELETE",
			`/api/v1/accounts/${accountId}`,
		);
	}
}
