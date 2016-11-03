if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use. Redirect to mobile site.");
}else{
  console.log("Desktop Browser in use.");
}

//scroll past header, fix the topic bar.

//scroll past footer and lock side bar.
  //scroll up again and unlock side bar.

function login(){
  //Login Page shows up.
}

function expandSearchBar(){
  var search = document.getElementById("expand");

  search.style.display = (search.style.display === "none") ? "inline-block" : "none";

  //make header rhs bigger.
}

$(document).ready(function(){

  var headertopic = $("#header_topic").offset().top;

  var sidepanetop = $("#sidepanel").offset().top;

  $(window).scroll(function(){
    var currentScroll = $(window).scrollTop();

    //Locks the Category Bar to the top.
    if(currentScroll >= headertopic){
      $("#header_topic").css({
        position: "fixed",
        top: "0",
        left: "0"
      });
    }else{
      $("#header_topic").css({
        position: "static"
      });
    }

    //Locks the Side Bar to the Side when it has full length.
    if(currentScroll >= sidepanetop){
      $("#sidepanel").css({
        position: "fixed",
        top: "0",
        width: "15%"
      });
    }else{
      //Widths change due to the DISPLAY: TABLE-CELL thing
      //Need to remember to readjust the width.
      $("#sidepanel").css({
        position: "relative",
        width: "25%"
      });
    }
  });





});
