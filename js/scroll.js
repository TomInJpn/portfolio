$(function(){

  let scroll_top;
  let whatlearned_top;
  const screen_height=$(window).height();
  const scroll_height=$("body").height()-screen_height;
  const whatlearned_height=$("#whatLearned").offset().top;

  function aboutme_image_effect(scroll_top){
    $(".aboutme_image").css({
      top:    `calc(40vh - ${scroll_top/4}px)`,
      opacity:`calc( 0.5 - ${scroll_top/3000} )`,
    });
  }
  function learned_image_effect(whatlearned_top,scroll_top){
    if(whatlearned_top<screen_height/2 && scroll_height-scroll_top>100){
      $(".whatLearned_image").css("animation","whatLearned_img 1s");
      $(".whatLearned_image").addClass("whatLearned_image_after");
    }
    else if($(".whatLearned_image").hasClass("whatLearned_image_after")){
      $(".whatLearned_image").css("animation","whatLearned_img_remove 1s");
      $(".whatLearned_image").removeClass("whatLearned_image_after");
    }
  }



  aboutme_image_effect($(window).scrollTop());

  $(window).on("scroll",function(){

    scroll_top=$(window).scrollTop();
    aboutme_image_effect(scroll_top);

    whatlearned_top=whatlearned_height-scroll_top;
    learned_image_effect(whatlearned_top,scroll_top);

  });

});