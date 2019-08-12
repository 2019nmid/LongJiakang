//打包图片进入JS

const path = require('path');


module.exports = {
    entry:'./input.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'output.bundle.js'
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 18192,
                },
              },
            ],
          },
        ],
      },

};

