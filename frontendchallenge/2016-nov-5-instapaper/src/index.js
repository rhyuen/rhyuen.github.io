console.log("[%s] Instapaper Clone", new Date().toLocaleString());

$(document).ready(function(){

  var count = 0;
  var postLimit = 12;
  while(count < postLimit){
      $("#main_frame").append(makePost());
      count++;
  }



  function makePost(){
    return(
      $("<div/>", {class: "post"})
        .append($("<div/>", {class: "post_title"})
        .append($("<div/>", {text: "Post Title"})
        .append($("<span/>", {class:"post_edit"})
        .append($("<a/>", {href: "#", text: "Edit"})
      ))))
        .append($("<div/>", {class: "post_content", text: "Post Content"}))
        .append($("<div/>", {class: "post_bottom"})
          .append($("<div/>", {class: "post_meta", text: "Relative Time * N min Read"}))
          .append($("<div/>", {class: "post_social", text: "Icons Go here."}))
        )
    );
  }
});

$("#addlink").click(function(){  
  $("#signup_page").css({width: "100%", display: "block"});
});

// $("*").not($("#addlink")).click(function(){
//   if($("#signup_page").width() === "100%"))
//     $("$signup_page").css({width: "0%"});
// });
