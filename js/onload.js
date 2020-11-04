function portfolio_onload(){
  $(".loading").css("display","none");
  $("header nav .top").css("animation","top_shrink 3s");
}

$(window).on('load', function(){
  portfolio_onload();
});

setTimeout(function(){
  portfolio_onload();
},3000);
