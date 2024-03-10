export type ListResponse<TResponse> = {
    items: TResponse[];
}

export type BotResponse = {
    id: string;
    name: string;
    description: string;
    symbols: string[];
    side: string;
    platform: string;
}

export type GetBotByIdRequest = {
    id: string
}

export type DeleteBotRequest = {
    id: string
}

export type CreateBotRequest = {
    id: string;
    name: string;
    description: string;
    symbols: string[];
    side: string;
    platform: string;
}

export type CreateBotResponse = {
    id: string;
}

