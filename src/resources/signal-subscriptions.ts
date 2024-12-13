import type { CreatedResponse, HttpRequestHandler } from "./shared";

export type CreateSignalSubscriptionRequest = {
	userId: string;
	signalSourceId: string;
};

export type SignalSubscriptionResponse = {
	id: string;
	userId: string;
	signalSourceId: string;
	createdTime: Date;
};

export type SignalSubscriptionCreatedResponse = CreatedResponse;
export type SignalSubscriptionDetailsResponse = SignalSubscriptionResponse;

export interface ISignalSubscriptionService {
	createSignalSubscription(
		request: CreateSignalSubscriptionRequest,
	): Promise<SignalSubscriptionCreatedResponse>;
	listSignalSubscriptions(): Promise<SignalSubscriptionResponse[]>;
}

export class SignalSubscriptionService implements ISignalSubscriptionService {
	public constructor(private readonly requestHandler: HttpRequestHandler) {}

	public async createSignalSubscription(
		request: CreateSignalSubscriptionRequest,
	): Promise<SignalSubscriptionCreatedResponse> {
		return this.requestHandler.invoke<SignalSubscriptionCreatedResponse>(
			"POST",
			"/api/v1/signal-subscriptions",
			request,
		);
	}

	public async listSignalSubscriptions(): Promise<
		SignalSubscriptionResponse[]
	> {
		return this.requestHandler.invoke<SignalSubscriptionResponse[]>(
			"GET",
			"/api/v1/signal-subscriptions",
		);
	}
}
