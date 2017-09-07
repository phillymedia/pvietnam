require("./parallax.js");

$(document).ready(function(){

  var targetOffset = $("#pvietnam-maps-container").offset().top;

  var $w = $(window).scroll(function(){
      var dif = ($w.scrollTop() - targetOffset + 150);
      console.log(dif);
      if ( $w.scrollTop() > (targetOffset - 150) ) {
        console.log("hit");
        $("#g-vietnam-map-global-Artboard_1").css('transform', 'scale('+ (1+(dif*0.0005)) + ')');
      } else {
        $("#g-vietnam-map-global-Artboard_1").css('transform', 'scale(1)');
      }
  });


});
