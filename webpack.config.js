const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/react/index.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 5000
  },
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/assets/css'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
       template: './index.html'
    })
 ]
}