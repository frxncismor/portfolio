const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
};
