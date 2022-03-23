const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/'
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
  }
}