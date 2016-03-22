$(document).ready(function() {
  // mobile menu
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

  //home page
  $( ".toggle-advanced" ).click(function() {
    $( ".advanced" ).slideToggle( "slow", function() {
      $( ".home" ).toggleClass( "advanced-search" )
    });
  });

  //modal
  $('body').on('click', '.document-list .needed', function(e){
    e.preventDefault();
    $('#upload').modal().open();
  });
  $('body').on('click', '.actions .upload', function(e){
    e.preventDefault();
    $('#upload').modal().open();
  });


  // attach modal close handler
  $('.modal .close').on('click', function(e){
    e.preventDefault();
    $.modal().close();
  });

});
