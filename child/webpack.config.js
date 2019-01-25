const path = require('path');

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

highOrderComponentLoader = {
  test: /HighOrderContainer.js/,
  exclude: /node_modules/,
  use: {
    loader: "hoc-exposure-loader",
    options: {
      names: {
        component: 'HighOrderContainer',
        root: 'remoteComponent'
      }
    }
  }
};

module.exports = {
  entry: {
    HighOrderComponent: './src/components/HighOrderContainer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: { react: 'React' },
  devtool: 'sourcemap',
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'build-utils')],
  },
  module: {
    rules: [
      babelLoader,
      highOrderComponentLoader 
    ]
  }
}
