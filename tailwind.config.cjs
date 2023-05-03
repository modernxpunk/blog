/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
				screens: {
					// sm: "600px",
					// md: "728px",
					// lg: "984px",
					// xl: "1000px",
					"2xl": "630px",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
};
