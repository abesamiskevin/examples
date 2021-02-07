const { ESBuildPlugin } = require('esbuild-loader');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	optimization: {
		minimize: false
	},
	devtool: 'inline-cheap-module-source-map',
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'esbuild-loader',
				exclude: [
					[
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, '.webpack')
					]
				],
				options: {
					loader: 'ts',
					target: 'es2019'
				}
			}
		]
	},
	target: 'node',
	plugins: [new ESBuildPlugin()],
	externals: [nodeExternals()]
};
