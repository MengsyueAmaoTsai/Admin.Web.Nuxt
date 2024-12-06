import { AccountService, type IAccountService } from "./accounts";
import { type IInstrumentService, InstrumentService } from "./instruments";
import { HttpRequestHandler } from "./shared";
import {
	type ISignalSourceService,
	SignalSourceService,
} from "./signal-sources";
import { type IUserService, UserService } from "./users";

const requestHandler = new HttpRequestHandler("https://localhost:10000");
export const userService = new UserService(requestHandler);
export const instrumentService = new InstrumentService(requestHandler);
export const accountService = new AccountService(requestHandler);
export const signalSourceService = new SignalSourceService(requestHandler);
