//index.js



function popupEmail(){
  var shamelessPlug = "If you could be so kind as to\
   follow me on twitter and add your\
   email address below.  \
   That would be ever so gracious of you.";

  $(".content").append($("<div/>", {class: "overlay"})
    .append($("<div/>", {class: "closebutton", text: "X"}))
    .append($("<div/>", {class: "popup", text: shamelessPlug})));


  $(".closebutton").click(function(){
    $(".overlay").remove();
  });
}

setTimeout(popupEmail, 3000);
