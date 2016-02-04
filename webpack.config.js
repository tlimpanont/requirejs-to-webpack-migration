var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/js/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'app/js'),
    filename: 'bundle.js'
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
  }
};
