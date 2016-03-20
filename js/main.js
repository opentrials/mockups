$(document).ready(function() {
   $("#menu").mmenu({
      offCanvas: {
        pageSelector: ".page",
        position  : "right"
      }
   }, {
         // configuration
         classNames: {
            selected: "active"
         }

  });
});
