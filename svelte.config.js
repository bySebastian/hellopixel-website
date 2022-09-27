import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import autoprefixer from "autoprefixer";
import mediaVariables from "postcss-media-variables";

export const prerender = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: [".svelte", ".md"],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer, mediaVariables]
			},
		}),
		mdsvex({
			extensions: [".md"],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
		}),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
