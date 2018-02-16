const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const htmlConfig = {
  template: './app/index.html',
};

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/',
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(ttf|otf|eot|woff|woff2)$/, loader: 'url-loader'},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
  ],
};
