const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const exposeLoader = {
  test: require.resolve('react'),
  use: [{
    loader: 'expose-loader',
    options: 'React'
  }]
};

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [ 
      exposeLoader, 
      babelLoader 
    ]
  },
  plugins: [htmlPlugin]
};
