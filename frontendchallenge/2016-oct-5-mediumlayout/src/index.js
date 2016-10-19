//medium layout index.js

$(document).ready(function(){
  // window.onscroll = function(){
  //   var offset = $("footer").offset();
  //   var footerChange = offset.top - $(window).height() + 40;
  //   var doc = document.documentElement;
  //   var body = document.body;
  //   var top = (doc && doc.scrollTop || body && body.scrollTop || 0);
  //   if(top > footerChange){
  //     $("footer").css("position", "relative");
  //   }else{
  //     $("footer").css("position", "fixed");
  //   }
  // }

  $("#login").click(function(){
    $("body").append($("<div/>", {class: "overlay_login"}));

  });
});
