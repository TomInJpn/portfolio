$(function(){

let scroll_top;
const screen_height=$(window).height();
const scroll_height=$("body").height()-screen_height;
const portfolio_height=$("#portfolio").offset().top;

function aboutme_image_effect(scroll_top){
  $(".aboutme_image").css({
    top:    `calc(40vh - ${scroll_top/4}px)`,
    opacity:`calc( 0.5 - ${scroll_top/3000} )`,
  });
}
function portfolio_image_effect(portfolio_top,scroll_top){
  if(portfolio_top<screen_height/2 && scroll_height-scroll_top>50){
    $(".portfolio_image").css("animation","portfolio_img 2s");
    $(".portfolio_image").addClass("portfolio_image_after");
  }
  else if($(".portfolio_image").hasClass("portfolio_image_after")){
    $(".portfolio_image").css("animation","portfolio_img_remove 1s");
    $(".portfolio_image").removeClass("portfolio_image_after");
  }
}



aboutme_image_effect($(window).scrollTop());

  $(window).on("scroll",function(){

    scroll_top=$(this).scrollTop();
    aboutme_image_effect(scroll_top);

    portfolio_top=portfolio_height-scroll_top
    portfolio_image_effect(portfolio_top,scroll_top);

  });

});