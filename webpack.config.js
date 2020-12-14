 const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'js/script.js'),
    output: {
       path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',

    module: {
     rules: [
       {
         test: /\.s[ac]ss$/i,
         use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
    
}