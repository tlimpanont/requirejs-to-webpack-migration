define(['jquery', 'require'], ($, require) => {
  console.log('timeout module loaded!');
  setTimeout(function() {
    $('body').css({background: 'red'});
    $('body').append('<p>timeout.js is loaded!</p>');
  }, 2000);
});
