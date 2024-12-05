export type ErrorResponse = {
	status: number;
	type: string;
	title: string;
	detail: string;
};

export type CreatedResponse = {
	id: string;
};

export interface IHttpRequestHandler {
	invoke<TResponse>(
		method: string,
		path: string,
		body?: object,
	): Promise<TResponse>;
}

export class HttpRequestHandler implements IHttpRequestHandler {
	public constructor(private readonly baseAddress: string) {}

	public async invoke<TResponse>(
		method: string,
		path: string,
		body?: object,
	): Promise<TResponse> {
		const fullUrl = `${this.baseAddress}${path}`;

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
