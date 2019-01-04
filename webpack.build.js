const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: "development", // "production",
	devtool: "source-map",
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script/[name].[hash].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		// new webpack.optimize.AggressiveSplittingPlugin({
		// 	minSize: 30000, // 字节，分割点。默认：30720
		// 	maxSize: 50000, // 字节，每个文件最大字节。默认：51200
		// 	chunkOverhead: 0, // 默认：0
		// 	entryChunkMultiplicator: 1, // 默认：1
		// }),
		// new webpack.HashedModuleIdsPlugin({
		// 	hashFunction: 'sha256',
		// 	hashDigest: 'hex',
		// 	hashDigestLength: 20
		// }),
		new webpack.optimize.SplitChunksPlugin({
			chunks: "all",
			minSize: 20000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"',
		}),
		// new DashboardPlugin(dashboard.setData),
		// new DashboardPlugin(),
		new ProgressBarPlugin({
			format: 'build [:bar] :percent (:elapsed seconds)',
			clear: true,
			width: 60
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
    		template: 'config/index.html',
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: "style/[name].css",
	      chunkFilename: "style/[id].css"
	    })
	],
	module: {
		rules: [
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", options: { presets: ['@babel/preset-react'] ,plugins: [
			["@babel/plugin-proposal-decorators", { "legacy": true }],

			] } },
			{
				test: /\.(less|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					// devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					// 'postcss-loader',
					'less-loader',
				],
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	target: "web",
	stats: {
		assets: true,
		colors: true,
		errors: true,
		errorDetails: true,
		hash: true,
	},
	bail: true,
		performance: {
		hints: "warning", // 枚举    
		maxAssetSize: 30000000, // 整数类型（以字节为单位）
		maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
		assetFilter: function(assetFilename) {
			// 提供资源文件名的断言函数
			return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		}
	},
};