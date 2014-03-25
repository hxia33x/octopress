jQuery(document).ready(function ($) {
  $(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.15 - 8)+'px');
  }
});