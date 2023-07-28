module.exports = {
	plugins: [require.resolve('prettier-plugin-astro')],
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.astro', '*yml'],
			options: {
				useTabs: false,
				parser: 'astro'
			}
		}
	],
	endOfLine: 'lf',
	jsxSingleQuote: true
}
