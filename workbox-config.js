module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{vue,gif,png,scss,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};