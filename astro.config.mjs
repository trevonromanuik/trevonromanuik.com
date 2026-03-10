// @ts-check
import { defineConfig } from 'astro/config';

const srcAlias = new URL('./src', import.meta.url).pathname;

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
	vite: {
		resolve: {
			alias: {
				'@': srcAlias,
			},
		},
	},
});
