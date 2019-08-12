const path = require("path");
const uglifyjs = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
module.exports = {
    mode: "development", 
    entry: "../src/js/main",
    output: { 
        path: path.resolve(__dirname, "../dist/js"), 
        filename: "main.js"
    },
    module: {
        rules: [
            
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: '../img/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: '../src/index.html', 
            filename: '../index.html' 
        }),
        new uglifyjs(),
        new MiniCssExtractPlugin({
            filename: "../css/styles.css" 
    ]
}