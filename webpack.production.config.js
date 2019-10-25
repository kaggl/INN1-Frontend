const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[chunkhash].[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	],
});
