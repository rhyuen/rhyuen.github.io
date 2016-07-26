//index.js


$(document).ready(function(){
  $(window).scroll(function(){
    if($(document).height() - $(window).height() === $(window).scrollTop()){
      $(".content")
        .append($("<div/>", {class: "row", text: "Newly Appended"}));
    }

  });
});
