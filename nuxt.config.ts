// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	debug: process.env.NODE_ENV !== "production",
	devtools: { enabled: process.env.NODE_ENV !== "production" },
	ssr: true,
	srcDir: "src/",
	rootDir: "./",
	dir: {
		pages: "pages",
		layouts: "layouts",
		middleware: "middlewares",
		plugins: "plugins",
		modules: "modules",
		assets: "assets",
	},
	appConfig: {
		nuxt: {
			appId: "RichillCapital.Admin.Web",
			version: "1.0.0.0",
		},
	},
	runtimeConfig: {
		public: {
			origin:
				process.env.NODE_ENV === "production"
					? "https://admin.richillcapital.com"
					: "http://localhost:9995",

			apiService: {
				baseAddress:
					process.env.NODE_ENV === "production"
						? "https://api.richillcapital.com"
						: "http://localhost:11000",
			},
			identity: {
				authority:
					process.env.NODE_ENV === "production"
						? "https://identity.richillcapital.com"
						: "https://localhost:9999",
				clientId: "RichillCapital.Admin.Web.Nuxt",
				clientSecret: "secret",
				responseType: "code",
			},
		},
	},
	css: ["~/assets/styles/main.scss"],
	plugins: [
		{
			src: "~/plugins/fluent-ui.ts",
			mode: "client",
		},
	],
	modules: ["@pinia/nuxt"],
});
