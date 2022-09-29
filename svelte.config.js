import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const prerender = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: [".svelte", ".md"],

	preprocess: [
		preprocess({
			postcss: true,
			default: {
				style: "postcss",
			}
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
