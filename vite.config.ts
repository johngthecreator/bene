import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest:{
		"name": "bene.",
		"short_name": "bene.",
		"description": "A task management app straight from the 90's",
		"icons": [
			{
				"src": "/android-chrome-192x192.png",
				"sizes": "192x192",
				"type": "image/png",
				"purpose": "monochrome"
			},
			{
				"src": "/apple-touch-icon.png",
				"sizes": "180x180",
				"type": "image/png",
				"purpose": "any"
			},
			{
				"src": "/maskable_icon.png",
				"sizes": "225x225",
				"type": "image/png",
				"purpose": "maskable"
			}
		],
		"theme_color": "#CBCBCB",
		"background_color": "#CBCBCB",
		"display": "standalone",
		"scope": "/",
		"start_url": "/",
		"orientation": "portrait"
	}
};
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});