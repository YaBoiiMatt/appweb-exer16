import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Documentation TP1",
	description:
		"Documentation des travaux pratiques en appweb faite par un pair",
		base: '/appweb-exer16/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "TP Cédric", link: "/mathieu-cote" },
			{ text: "TP Mathieu", link: "/cedric-gourdes" },
		],

		sidebar: [
			{
				text: "TPs",
				items: [
					{
						text: "Documentation TP Cédric Gourdes",
						link: "/mathieu-cote",
					},
					{
						text: "Documentation TP Mathieu Côté",
						link: "/cedric-gourdes",
					},
				],
			},
		],
	},
});
