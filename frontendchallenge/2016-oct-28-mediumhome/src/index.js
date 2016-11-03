if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use. Redirect to mobile site.");
}else{
  console.log("Desktop Browser in use.");
}

function login(){
  //TODO:Login Page shows up.
}

/*
  TODO: APPEND() USER DETAILS TOOL TIP TO NAMES AND AVA
  CSS SELECTORS: 4 SELECTORS
    .side_pane_details_ava
    .side_pane_details_username
    .feed_user_name
    .feed_user_ava


  FOR HOVER FEATURE
*/

function expandSearchBar(){
  var search = document.getElementById("expand");
  search.style.display = (search.style.display === "none") ? "inline-block" : "none";
}

function closeSignupAd(){
  $("#signup_ad").css({
    display: "none"
  });
}

$(document).ready(function(){

  var headertopic = $("#header_topic").offset().top;

  var sidepanetop = $("#sidepanel").offset().top;

  //TODO:
  //UNCLICK FOR SEARCH BAR DOESN"T WORK AS EXPECTED
  //DOESN"T APPLY FOR ALL SELECTORS
  $("#maincontainer, #header_jumbotron, #header_topic").click(function(){
    var search = document.getElementById("expand");
    if(search.style.display === "inline-block"){
        search.style.display = "none";
    }
  });

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
