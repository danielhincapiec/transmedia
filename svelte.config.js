import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),
	compilerOptions: {
		// 
	},
	onwarn: (warning, handler) => {
		if (warning.code === 'a11y-consider-adding-label') return;
		handler(warning);
	}
};