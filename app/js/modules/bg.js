define(['jquery'], ($) => {
  return {
    paint: function(color) {
      $('body').css({ background: color });
    }
  }
});
