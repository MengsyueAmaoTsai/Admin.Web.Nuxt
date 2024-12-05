import type { CreatedResponse, IHttpRequestHandler } from "./shared";

export type UserDetailsResponse = UserResponse;
export type UserCreatedResponse = CreatedResponse;

export type UserResponse = {
	id: string;
	email: string;
	name: string;
	createdTime: Date;
};

export type CreateUserRequest = {
	email: string;
	name: string;
	password: string;
};

export interface IUserService {
	listUsers(): Promise<UserResponse[]>;
	getUser(userId: string): Promise<UserDetailsResponse>;
	createUser(request: CreateUserRequest): Promise<UserCreatedResponse>;
	deleteUser(userId: string): Promise<void>;
}

export class UserService implements IUserService {
	public constructor(private readonly requestHandler: IHttpRequestHandler) {}

	public async listUsers(): Promise<UserResponse[]> {
		return this.requestHandler.invoke<UserResponse[]>("GET", "/api/v1/users");
	}

	public async getUser(userId: string): Promise<UserDetailsResponse> {
		return this.requestHandler.invoke<UserDetailsResponse>(
			"GET",
			`/api/v1/users/${userId}`,
		);
	}

	public async createUser(
		request: CreateUserRequest,
	): Promise<UserCreatedResponse> {
		return this.requestHandler.invoke<UserCreatedResponse>(
			"POST",
			"/api/v1/users",
			request,
		);
	}

	public async deleteUser(userId: string): Promise<void> {
		return this.requestHandler.invoke<void>(
			"DELETE",
			`/api/v1/users/${userId}`,
		);
	}
}
