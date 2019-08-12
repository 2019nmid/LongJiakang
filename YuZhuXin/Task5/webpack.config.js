const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require("html-webpack-plugin");
var webpath={
    publicPath:"http://192.168.199.124:9090/"
}
module.exports={
    entry:{
        entry:'./src/entry.js',
        entry2:'./src/entry2.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:webpath.publicPath
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }, {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader']
            }
        ]
    },
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new extractTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:9090
    }
}