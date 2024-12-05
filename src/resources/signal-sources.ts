import type { CreatedResponse, HttpRequestHandler } from "./shared";

export type SignalSourceDetailsResponse = SignalSourceResponse;
export type SignalSourceCreatedResponse = CreatedResponse;

export type CreateSignalSourceRequest = {
	id: string;
	name: string;
	description: string;
	version: string;
};

export type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	version: string;
	createdTime: Date;
};

export interface ISignalSourceService {
	createSignalSource(
		request: CreateSignalSourceRequest,
	): Promise<SignalSourceCreatedResponse>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSource(signalSourceId: string): Promise<SignalSourceDetailsResponse>;
	deleteSignalSource(signalSourceId: string): Promise<void>;
}

export class SignalSourceService implements ISignalSourceService {
	public constructor(private readonly requestHandler: HttpRequestHandler) {}

	public async createSignalSource(
		request: CreateSignalSourceRequest,
	): Promise<SignalSourceCreatedResponse> {
		return this.requestHandler.invoke<SignalSourceCreatedResponse>(
			"POST",
			"/api/v1/signal-sources",
			request,
		);
	}

	public async listSignalSources(): Promise<SignalSourceResponse[]> {
		return this.requestHandler.invoke<SignalSourceResponse[]>(
			"GET",
			"/api/v1/signal-sources",
		);
	}

	public async getSignalSource(
		signalSourceId: string,
	): Promise<SignalSourceDetailsResponse> {
		return this.requestHandler.invoke<SignalSourceDetailsResponse>(
			"GET",
			`/api/v1/signal-sources/${signalSourceId}`,
		);
	}

	public async deleteSignalSource(signalSourceId: string): Promise<void> {
		return this.requestHandler.invoke<void>(
			"DELETE",
			`/api/v1/signal-sources/${signalSourceId}`,
		);
	}
}
