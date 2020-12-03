/* eslint-disable no-undef */
module.exports = {
	plugins: [
		require('precss'),
		require('tailwindcss'),
		require('autoprefixer'),
		...(process.env.NODE_ENV === 'production'
			? [require('postcss-clean')]
			: []),
	],
}
