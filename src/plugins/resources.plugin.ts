import { resourceServiceSingleton, userService } from "~/resources";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("resourceService", resourceServiceSingleton);
	nuxtApp.provide("userService", userService);
});
