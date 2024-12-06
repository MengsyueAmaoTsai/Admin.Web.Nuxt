import {
	accountService,
	instrumentService,
	signalSourceService,
	userService,
} from "~/resources";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("userService", userService);
	nuxtApp.provide("instrumentService", instrumentService);
	nuxtApp.provide("accountService", accountService);
	nuxtApp.provide("signalSourceService", signalSourceService);
});
