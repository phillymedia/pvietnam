require("./parallax.js");
require("./featherlight.js");



$(document).ready(function(){


  var targetOffset = $("#map-stack-1").offset().top,
      targetOffset2 = $('#vietnam-text-overlay').offset().top + 50;

  var $w = $(window).scroll(function(){
      var dif = ($w.scrollTop() - targetOffset + $(window).height());
      if ($w.scrollTop() > (targetOffset - $(window).height())) {
        $("#g-vietnam-map-global-Artboard_1").css('transform', 'scale('+ (1+(dif*0.0004)) + ')');
      }
      else {
        $("#g-vietnam-map-global-Artboard_1").css('transform', 'scale(1)');
      }

      var dif2 = (($w.scrollTop() - 50) - targetOffset + $(window).height());
      if ($w.scrollTop() - 50 > (targetOffset2 - $(window).height())) {
        $("#vietnam-text-overlay").css("opacity", (''+ dif2*0.0015 + ''));
      } else {
        $("#vietnam-text-overlay").css("opacity", ('0'));
      }
  });





  $(window).on('ready resize', function() {
      var rowwidth = $(".col").outerWidth();
      var outercolwidth = $(".container").outerWidth();
      var windowwidth = $(window).width();
      var colleftbuffer = $('.col-md-6').offset().left + $(".col-md-6").outerWidth();
      var colleft = $(".col-md-6").outerWidth();

      if ($(window).width() >= 992) {
          $(".fixedside")
              .css('left', colleft + "px")
              .css('width', $(window).width() - colleftbuffer - 20 + "px")
              .css('margin-right', '');


      } else if ($(window).width() < 992 && $(window).width() >= 768) {
          $(".fixedside")
              .css('left', "")
              .css('width', colleft * .50 + $('.col-md-6').offset().left + "px")
              .css('margin-right', '-' + ($('.col-md-6').offset().left - 10) + "px");

      } else if ($(window).width() < 768) {
          $(".fixedside")
              .css('left', "")
              .css('width', "")
              .css('margin-right', '');
      }

  })

});
