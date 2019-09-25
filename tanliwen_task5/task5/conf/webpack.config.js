const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: '../src/main.js',  
	output: {
		path: __dirname + '/dist', 
        filename: 'build.js',	   
        publicPath: '/dist',
	},
	module: {
		rules: [
            {
            	test: /\.css$/, 
            	use: [ 
                    'style-loader',
                    'css-loader'
            	]
            }
		]
    },
    devServer: {
        host: 'localhost',
        port: '8080',
        hot: true//热加载
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        	title: '123',  
        	filename: 'index.html',
            template: '../src/index.html'
        })
	]
}