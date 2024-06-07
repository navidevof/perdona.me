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
		},
	},
	plugins: [],
};
export default config;
