import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";

export default defineNuxtPlugin((_) => {
	provideFluentDesignSystem().register(allComponents);
});
