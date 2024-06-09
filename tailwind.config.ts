import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"custom-red-1": "#DC2626",
				"custom-gray-2": "#6B7280",
				"custom-dark-1": "#111827",
				"custom-dark-2": "#030712",
			},
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "100%",
					},
				},
				blink: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "white",
					},
				},
			},
			animation: {
				typing: "typing 2s steps(20) alternate, blink .7s infinite",
			},
		},
	},
	plugins: [],
};
export default config;
