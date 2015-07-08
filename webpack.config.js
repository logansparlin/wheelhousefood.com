var path = require('path')

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
  resolve: {
    extensions: ['', '.coffee', '.js']
  }
}
