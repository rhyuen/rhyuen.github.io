//medium layout index.js
if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use. Redirect to mobile site.");
}else{
  console.log("Desktop Browser in use.");
}


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




});

function openLogin(){
  document.getElementById("login_panel").style.width = "100%";
}

function closeLogin(){
  document.getElementById("login_panel").style.width = "0%";
}
