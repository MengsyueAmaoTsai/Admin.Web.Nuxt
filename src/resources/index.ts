import {
	type AccountCreatedResponse,
	AccountService,
	type CreateAccountRequest,
	type IAccountService,
} from "./accounts";
import {
	type CreateInstrumentRequest,
	type IInstrumentService,
	type InstrumentCreatedResponse,
	type InstrumentResponse,
	InstrumentService,
} from "./instruments";
import { HttpRequestHandler } from "./shared";
import {
	type CreateSignalSourceRequest,
	type ISignalSourceService,
	type SignalSourceCreatedResponse,
	SignalSourceService,
} from "./signal-sources";
import {
	type CreateUserRequest,
	type IUserService,
	type UserCreatedResponse,
	type UserDetailsResponse,
	type UserResponse,
	UserService,
} from "./users";

export interface IResourceService
	extends IUserService,
		IInstrumentService,
		IAccountService,
		ISignalSourceService {}

class ResourceService implements IResourceService {
	public constructor(
		private readonly userService: IUserService,
		private readonly instrumentService: IInstrumentService,
		private readonly accountService: IAccountService,
		private readonly signalSourceService: ISignalSourceService,
	) {}

	public async getUser(userId: string): Promise<UserDetailsResponse> {
		return this.userService.getUser(userId);
	}

	public async listUsers(): Promise<UserResponse[]> {
		return this.userService.listUsers();
	}

	public async createUser(
		request: CreateUserRequest,
	): Promise<UserCreatedResponse> {
		return this.userService.createUser(request);
	}

	public async deleteUser(userId: string): Promise<void> {
		return this.userService.deleteUser(userId);
	}

	public async listInstruments(): Promise<InstrumentResponse[]> {
		return this.instrumentService.listInstruments();
	}

	public async getInstrument(instrumentId: string) {
		return this.instrumentService.getInstrument(instrumentId);
	}

	public async createInstrument(
		request: CreateInstrumentRequest,
	): Promise<InstrumentCreatedResponse> {
		return this.instrumentService.createInstrument(request);
	}

	public async deleteInstrument(instrumentId: string) {
		return this.instrumentService.deleteInstrument(instrumentId);
	}

	public async getAccount(accountId: string) {
		return this.accountService.getAccount(accountId);
	}

	public async listAccounts() {
		return this.accountService.listAccounts();
	}

	public async createAccount(
		request: CreateAccountRequest,
	): Promise<AccountCreatedResponse> {
		return this.accountService.createAccount(request);
	}

	public async deleteAccount(accountId: string) {
		return this.accountService.deleteAccount(accountId);
	}

	public async getSignalSource(signalSourceId: string) {
		return this.signalSourceService.getSignalSource(signalSourceId);
	}

	public async listSignalSources() {
		return this.signalSourceService.listSignalSources();
	}

	public async createSignalSource(
		request: CreateSignalSourceRequest,
	): Promise<SignalSourceCreatedResponse> {
		return this.signalSourceService.createSignalSource(request);
	}

	public async deleteSignalSource(signalSourceId: string) {
		return this.signalSourceService.deleteSignalSource(signalSourceId);
	}
}

const requestHandler = new HttpRequestHandler("https://localhost:10000");
export const userService = new UserService(requestHandler);
const instrumentService = new InstrumentService(requestHandler);
const accountService = new AccountService(requestHandler);
const signalSourceService = new SignalSourceService(requestHandler);

export const resourceServiceSingleton = new ResourceService(
	userService,
	instrumentService,
	accountService,
	signalSourceService,
);
