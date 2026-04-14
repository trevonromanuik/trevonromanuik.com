// @ts-check
import { defineConfig } from 'astro/config';

const srcAlias = new URL('./src', import.meta.url).pathname;

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
	vite: {
		build: {
			rollupOptions: {
				output: {
					// This moves all assets (CSS, images, fonts) into a "css" folder
					// [name] is the original filename, [hash] is for cache busting
					assetFileNames: 'css/[name].[hash][extname]',
				},
			},
		},
		resolve: {
			alias: {
				'@': srcAlias,
			},
		},
	},
});
