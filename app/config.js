require.config({
  // make components more sensible
  // expose jquery
  paths: {
    'components': '../bower_components',
    'jquery': '../bower_components/jquery/dist/jquery',
    'lodash': '../bower_components/lodash/dist/lodash',
    'chance': '../bower_components/chance/chance'
  },
  shim: {
    'lodash': {
      exports: '_'
    },
    jquery: {
      exports: ['$', 'jQuery']
    }
  }
});

if (!window.requireTestMode) {
  require(['main']);
}





