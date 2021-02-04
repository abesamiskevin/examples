const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const path = require('path');

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
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	target: 'node',
	externals: [nodeExternals()]
};
