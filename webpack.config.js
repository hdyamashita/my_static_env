const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    path.resolve('src/js/index.js'),
    path.resolve('src/scss/app.scss')],
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /.\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          }
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
  },
  watch: true
};
