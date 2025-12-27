// @ts-check
import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx";

export default defineConfig({
	vite: { plugins: [tailwindcss()], },
	integrations: [svelte(), mdx()],
	build: {
		format: process.env.BUILD_FORMAT === 'directory' ? 'directory' : 'file'
	}
});