/* eslint-disable no-undef */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier', 'html'],
	ecmaFeatures: {
		jsx: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		// parser: 'babel-eslint',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-tabs': 'off',
		eqeqeq: ['error', 'always'],
		indent: 'off',
		quotes: ['error', 'single'],
		semi: [2, 'never'],
		// 'no-unused-vars': 'warn',
		'object-curly-spacing': [2, 'always'],
	},
}
