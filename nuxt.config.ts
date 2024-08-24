// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Diagnostics and debugging
	debug: process.env.NODE_ENV !== "production",
	devtools: { enabled: process.env.NODE_ENV !== "production" },

	// SSR
	ssr: true,

	// Directory structure
	rootDir: "./",
	srcDir: "src/",
	dir: {
		pages: "pages",
		layouts: "layouts",
		middleware: "middlewares",
		plugins: "plugins",
		modules: "modules",
		assets: "assets",
	},

	// Styles
	css: ["~/assets/styles/global.scss"],

	// Plugins and modules
	plugins: [
		{
			src: "~/plugins/fluent-ui.ts",
			mode: "client",
		},
	],
	modules: ["@pinia/nuxt", "nuxt-security"],

	// Configurations
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
	appConfig: {
		nuxt: {
			appId: "RichillCapital.Admin.Web",
			version: "1.0.0.0",
		},
	},
});
