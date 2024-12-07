import { AccountService, type IAccountService } from "./accounts";
import { type IInstrumentService, InstrumentService } from "./instruments";
import { HttpRequestHandler } from "./shared";
import {
	type ISignalSourceService,
	SignalSourceService,
} from "./signal-sources";
import { type IUserService, UserService } from "./users";

const requestHandler = new HttpRequestHandler("https://localhost:10000");
export const userService = new UserService(requestHandler) as IUserService;
export const instrumentService = new InstrumentService(requestHandler) as IInstrumentService;
export const accountService = new AccountService(requestHandler) as IAccountService;
export const signalSourceService = new SignalSourceService(requestHandler) as ISignalSourceService;
