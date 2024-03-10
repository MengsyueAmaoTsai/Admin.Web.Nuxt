export interface ListResponse<TResponse> {
    items: TResponse[];
}

export interface BotResponse {
    id: string;
    name: string;
    description: string;
    symbols: string[];
    side: string;
    platform: string;
}

export interface GetBotByIdRequest {
    id: string
}

export interface DeleteBotRequest {
    id: string
}

export interface CreateBotRequest {
    id: string;
    name: string;
    description: string;
    symbols: string[];
    side: string;
    platform: string;
}

export interface CreateBotResponse {
    id: string;
}

