/* eslint-disable no-undef */
module.exports = {
	purge: {
		content: ['_site/**/*.html'],
		options: {
			whitelist: [],
			safelist: ['dark'],
		},
	},
	darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			display: ['dark'],
		},
	},
	plugins: [],
}
