var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/js/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'app/js'),
    filename: 'bundle.js',
    publicPath: './app/js/'
  },
  resolve: {
    moduleDirectories: [
      path.resolve(__dirname, 'app/js')
    ],
    alias: {
      'modules': path.resolve(__dirname, 'app/js/modules'),
      'components': path.resolve(__dirname, 'bower_components'),
      'jquery': path.resolve(__dirname, 'bower_components/jquery/dist/jquery'),
      'lodash': path.resolve(__dirname, 'bower_components/lodash/dist/lodash'),
      'chance': path.resolve(__dirname, 'bower_components/chance/chance')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015'] }
      }
    ]
  },
  plugins: [
    //new webpack.ContextReplacementPlugin(/timeout$/, __dirname + '/app/js/')
  ]
};
