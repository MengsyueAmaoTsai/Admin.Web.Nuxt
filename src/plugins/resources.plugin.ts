import { resourceServiceSingleton } from "~/resources";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide("resourceService", resourceServiceSingleton);
});
