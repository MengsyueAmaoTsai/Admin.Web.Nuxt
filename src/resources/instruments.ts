import type { CreatedResponse, IHttpRequestHandler } from "./shared";

export type InstrumentCreatedResponse = CreatedResponse;
export type InstrumentDetailsResponse = InstrumentResponse;

export type CreateInstrumentRequest = {
	symbol: string;
	description: string;
	type: string;
};

export type InstrumentResponse = {
	id: string;
	symbol: string;
	description: string;
	type: string;
	createdTime: Date;
};

export interface IInstrumentService {
	listInstruments(): Promise<InstrumentResponse[]>;
	createInstrument(
		request: CreateInstrumentRequest,
	): Promise<InstrumentCreatedResponse>;
	getInstrument(symbol: string): Promise<InstrumentDetailsResponse>;
	deleteInstrument(symbol: string): Promise<void>;
}

export class InstrumentService implements IInstrumentService {
	public constructor(private readonly requestHandler: IHttpRequestHandler) {}

	public async listInstruments(): Promise<InstrumentResponse[]> {
		return await this.requestHandler.invoke<InstrumentResponse[]>(
			"GET",
			"/api/v1/instruments",
		);
	}

	public async createInstrument(
		request: CreateInstrumentRequest,
	): Promise<InstrumentCreatedResponse> {
		return this.requestHandler.invoke<InstrumentCreatedResponse>(
			"POST",
			"/api/v1/instruments",
			request,
		);
	}

	public async getInstrument(
		symbol: string,
	): Promise<InstrumentDetailsResponse> {
		return await this.requestHandler.invoke<InstrumentDetailsResponse>(
			"GET",
			`/api/v1/instruments/${symbol}`,
		);
	}

	public async deleteInstrument(symbol: string): Promise<void> {
		await this.requestHandler.invoke<void>(
			"DELETE",
			`/api/v1/instruments/${symbol}`,
		);
	}
}
