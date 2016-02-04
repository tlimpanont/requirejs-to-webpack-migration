define(['jquery', 'chance', 'lodash', 'modules/bg'], ($, Chance, _, bg) => {
  var chance = new Chance();

  return (() => {

    var appendText = () => {
      $('body').append(`jQuery   $.fn.jquery  loaded!
         with chance.string():   ${chance.string()}  <br />`
      );
    };

    _.each([1,2,3,4,5,6,7,8,9,10], appendText);

    bg.paint('lightgrey');

  })();
});
