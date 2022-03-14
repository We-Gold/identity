import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
	base: "./",
	plugins: [
		solidPlugin(),
		VitePWA({
			manifest: {
				theme_color: "#ffffff",
				background_color: "#ffffff",
				display: "standalone",
				scope: "./",
				start_url: "./",
				name: "Identity",
				short_name: "Identity",
				description: "",
				icons: [
					{
						src: "./icons/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "./icons/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	build: {
		target: "esnext",
		polyfillDynamicImport: false,
	},
})
