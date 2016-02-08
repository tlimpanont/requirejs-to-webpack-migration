define(['jquery', 'require'], ($, require) => {



  return {
    paint: function(color) {
      $('body').css({ background: color });

      var $expressionRequire = 'modules/timeout';
      require($expressionRequire);
    }
  }
});
