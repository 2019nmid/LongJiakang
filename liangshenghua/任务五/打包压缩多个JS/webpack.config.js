//打包多个JS人间
const path = require('path');


// module.exports = {
//     entry:'./input.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename:'output.bundle.js'
//     }
// };

module.exports = {
    entry:[

             './index.js',
             './input.js'
    


    ],
       
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    mode: "development"
};