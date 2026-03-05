// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			'no-console': 'warn',
		},
	},
	{
		ignores: ['dist/**', 'node_modules/**', '.astro/**'],
	},
];

