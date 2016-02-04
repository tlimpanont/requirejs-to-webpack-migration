define(['jquery'], function($) {
  return {
    paint: function(color) {
      $('body').css({ background: color });
    }
  }
});
