const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
	entry: './src/js/main.js',
	/*output: {
		filename: '[chunkhash].[name].js',
		path: path.resolve(__dirname, 'dist')
	},*/
	module: {
		rules: [
			{
	      test: /\.s(c|a)ss$/,
	      use: [
	        'vue-style-loader',
	        'css-loader',
	        {
	          loader: 'sass-loader',
	          // Requires sass-loader@^7.0.0
	          options: {
	            implementation: require('sass'),
	            fiber: require('fibers'),
	            indentedSyntax: true // optional
	          },
	          // Requires sass-loader@^8.0.0
	          options: {
	            implementation: require('sass'),
	            sassOptions: {
	              fiber: require('fibers'),
	              indentedSyntax: true // optional
	            },
	          },
	        },
	      ],
	    },
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
			},
			{
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
     	]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new VuetifyLoaderPlugin(),
		new webpack.ProvidePlugin({
			Vue: ['vue/dist/vue.esm.js', 'default'],
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			$: 'jquery',
			moment: 'moment'
	    })
	]
};
