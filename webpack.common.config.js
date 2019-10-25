const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './src/js/main.js',
	/*output: {
		filename: '[chunkhash].[name].js',
		path: path.resolve(__dirname, 'dist')
	},*/
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				 include: [
				 	'/node_modules/vue2-datatable-component'
				],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
         		test: /\.less$/,
				use: [
					{
						loader: 'vue-style-loader' // creates style nodes from JS strings
					}, {
						loader: 'css-loader' // translates CSS into CommonJS
					}, {
						loader: 'less-loader' // compiles Less to CSS
					}
			    ]
         	},
			{
				test: /\.css$/,
				use: [
					{
						loader: "vue-style-loader"
					}, {
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.svg$/,
				loader: 'file-loader'
			}
     	]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			$: 'jquery',
			moment: 'moment'
	    })
	]
};