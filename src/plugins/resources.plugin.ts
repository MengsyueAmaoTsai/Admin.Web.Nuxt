import {
	accountService,
	instrumentService,
	orderService,
	signalSourceService,
	snapshotService,
	userService,
} from "~/resources";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("userService", userService);
	nuxtApp.provide("instrumentService", instrumentService);
	nuxtApp.provide("accountService", accountService);
	nuxtApp.provide("orderService", orderService);
	nuxtApp.provide("signalSourceService", signalSourceService);
	nuxtApp.provide("snapshotService", snapshotService);
});
