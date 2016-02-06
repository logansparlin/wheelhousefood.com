var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './_js/entry.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'js')
  },
  module: {
    loaders: [
      { loader: 'coffee', test: /\.coffee$/ },
      { loader: 'style!css!autoprefixer!sass', test: /\.scss$/ },
      { loader: 'style!css!autoprefixer', test: /\.css$/ },
      { exclude: /node_modules/, loaders: ['babel-loader'], test: /(\.js$)|(\.jsx$)/ }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("---\n---\n\n", { raw: true })
  ],
  resolve: {
    extensions: ['', '.coffee', '.js']
  }
}
