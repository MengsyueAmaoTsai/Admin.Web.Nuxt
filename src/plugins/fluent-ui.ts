import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";

export default defineNuxtPlugin((nuxtApp) => {
	provideFluentDesignSystem().register(allComponents);
});
