var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // `none`, `development`, `production`
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}