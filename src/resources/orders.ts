import type { CreatedResponse, IHttpRequestHandler } from "./shared";

export type OrderResponse = {
	id: string;
	accountId: string;
	symbol: string;
	tradeType: string;
	orderType: string;
	timeInForce: string;
	quantity: number;
};

export type CreateOrderRequest = {
	accountId: string;
	symbol: string;
	tradeType: string;
	orderType: string;
	timeInForce: string;
	quantity: number;
};

export type OrderCreatedResponse = CreatedResponse;
export type OrderDetailsResponse = OrderResponse;

export interface IOrderService {
	createOrder(request: CreateOrderRequest): Promise<OrderCreatedResponse>;
	getOrder(id: string): Promise<OrderDetailsResponse>;
	listOrders(): Promise<OrderResponse[]>;
}

export class OrderService implements IOrderService {
	public constructor(private readonly requestHandler: IHttpRequestHandler) {}

	public async createOrder(
		request: CreateOrderRequest,
	): Promise<OrderCreatedResponse> {
		return this.requestHandler.invoke<OrderCreatedResponse>(
			"POST",
			"/api/v1/orders",
			request,
		);
	}

	public async getOrder(id: string): Promise<OrderDetailsResponse> {
		return this.requestHandler.invoke<OrderDetailsResponse>(
			"GET",
			`/api/v1/orders/${id}`,
		);
	}

	public async listOrders(): Promise<OrderResponse[]> {
		return await this.requestHandler.invoke<OrderResponse[]>(
			"GET",
			"/api/v1/orders",
		);
	}
}
