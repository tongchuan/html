const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "production",
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script/[name].[chunkhash].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
    		template: 'config/index.html',
		})
	],
	module: {
		rules: [
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", options: { presets: ['@babel/preset-react'] } }
		]
	}
};