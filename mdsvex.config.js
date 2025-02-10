import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkAbbr from 'remark-abbr';

import { dirname, fromFileUrl } from 'https://deno.land/std/path/mod.ts';
import { join } from 'node:path';

const __dirname = dirname(fromFileUrl(import.meta.url));
const blogLayout = join(__dirname, 'src/lib/layouts/blog.svelte');

export const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: { blog: blogLayout },
	remarkPlugins: [remarkAbbr],
	rehypePlugins: [rehypeSlug],
	smartypants: {
		dashes: 'oldschool'
	}
};

const config = defineConfig(mdsvexConfig);

export default config;
