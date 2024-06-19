// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: true,
	srcDir: "src/",
	rootDir: "./",
	dir: {
		pages: "pages",
		layouts: "layouts",
		middleware: "middlewares",
		plugins: "plugins",
		modules: "modules",
	},
	appConfig: {
		nuxt: {
			appId: "RichillCapital.Admin.Web",
			version: "1.0.0.0",
		},
	},
});
