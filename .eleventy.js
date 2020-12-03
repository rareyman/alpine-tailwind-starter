const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false)

	eleventyConfig.addWatchTarget('./_tmp/style.css')

	eleventyConfig.addPassthroughCopy({
		'./_tmp/style.css': './css/master.css',
	})

	eleventyConfig.addPassthroughCopy({
		'./node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
	})

	// eleventyConfig.addPassthroughCopy({ 'src/**.njk': './' })
	eleventyConfig.addPassthroughCopy({ 'src/scripts/*': 'js' })

	eleventyConfig.addShortcode('version', function () {
		return String(Date.now())
	})
	eleventyConfig.addShortcode('script', function (script) {
		return `${script}`
	})

	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		if (
			process.env.ELEVENTY_PRODUCTION &&
			outputPath &&
			outputPath.endsWith('.html')
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			})
			return minified
		}

		return content
	})

	return {
		dir: {
			input: 'src',
			output: '_site',
		},
	}
}
