console.log("[%s] Instapaper Clone", new Date().toLocaleString());

if(/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)){
  console.log("Mobile Browser in use. Redirect to mobile site.");
}else{
  console.log("Desktop Browser in use.");
}


var posts = [
  {
    title: "Docker is the beest",
    source: "docker.com",
    author: "Docker Whaleman",
    preview: "I think docker is the bestest thing ever.  Isn't it great how there are whales everywhree?",
    date: "10 days ago",
    read: "10 min"
  },
  {
    title: "Bats are cool is the beest",
    source: "batman.com",
    author: "Alfred Pennyworth",
    preview: "Bats are cool too.  Says the man that jumps from roof tops fighting crime as a means of coping with the loss of his parents.  As the batman movie characterizes, he has an unquellable rage for criminals and has a hatred for guns.  However, he did threaten to use one that one time.  Shortly after, he hung up his cape. I think docker is the bestest thing ever.  Isn't it great how there are whales everywhree?",
    date: "371 days ago",
    read: "78 min"
  },
  {
    title: "Vagrant is also here is the beest",
    source: "vagrant.com",
    author: "Vagrabnt Whaleman",
    preview: "I think docker is the bestest thing ever well except for vagrant which is totally super awesome as well.  Devops is everywhere now isn't it?  I've of this ansible thing but apparently it's quite difficult/annoying to use or something along those lines.  Isn't it great how there are whales everywhree?",
    date: "98 days ago",
    read: "56 min"
  },
  {
    title: "Amazing",
    source: "amzaingness.ca",
    author: "amazing man",
    preview: "Isn't it cool how things are amazing sometimes.  LIke really amazing.  Both amazing things are good and bad.  Amazing times abound.  Someimtes the sky is blue.  Do you know why?  It's because of rayleigh scattering.  I think that's he reason.  The premise of what I just said is probalby not entirely correct however.  It's amazing how the memory fades.  For some people, I hear, it isn't quite like that.  I guess that's both fortunate and unfortunate as with nearly everything. Can you believe it, twitter doesn't seem to have much an idea as to what it wants to be.  It has been around forever too.  It's a fantastic way for celebrities and famous people of sorts to communicate with the public in a rather direct fashion.",
    date: "9765 days ago",
    read: "5 min"
  },
  {
    title: "Spectacular",
    source: "spectarularspidersapm",
    author: "Petoria Parkaria",
    preview: "All those closes are abound.  They becomes zombies.  I end up making a zombie apocalypse happening.",
    date: "365 days from now",
    read: "1 min"
  }
];


$(document).ready(function(){

  posts.map(function(post){
    $("#main_frame").append(
      makePost(post.title, post.source, post.author, post.preview, post.date, post.read));
  });

  $(".post_link_title > .post_edit").click(function(event){
    console.log($(this).parent().text().trim());
    $("#edit_link_page").css({display: "block"});
    $("#edit_form_title").val($(this).parent().text().trim());  
    $("#edit_form_link").val($(this).parent().siblings().text());
    $("#edit_form_summary").val($(this).parent().parent().siblings().text());
  });

  function makePost(title, source, author, preview, date, read){
    return(
      $("<div/>", {class: "post"})
        .append($("<div/>", {class: "post_title"})
        .append($("<div/>", {class: "post_link_title", text: title})
        .append($("<span/>", {class:"post_edit"})
        .append($("<a/>", {href: "#", text: "Edit"})
      )))
        .append($("<div/>", {class: "post_author", text: source + " by " + author})
      ))
        .append($("<div/>", {class: "post_content", text: preview}))
        .append($("<div/>", {class: "post_bottom"})
          .append($("<div/>", {class: "post_meta", text: date + " * "  + read}))
          .append($("<div/>", {class: "post_social"})
            .append($("<i/>", {class: "material-icons md-size md-gray", text: "favorite_border", title: "Like"}))
            .append($("<i/>", {class: "material-icons md-size md-gray", text: "folder_open", title: "Move"}))
            .append($("<i/>", {class: "material-icons md-size md-gray", text: "archive", title: "Archive"}))
            .append($("<i/>", {class: "material-icons md-size md-gray", text: "delete_forever", title: "Delete Forever"}))
            .append($("<i/>", {class: "material-icons md-size md-gray", text: "share", title: "Share..."}))))
        );
  }




});


$("#username > .dropdown").click(function(event){
  event.stopPropagation();
});

$("#side_footer > .dropdown").click(function(event){
  event.stopPropagation();
});

$("#username_dropdown_button").click(function(event){
  event.preventDefault();
  event.stopPropagation();
  $("#username > .dropdown").css({display: "block"});
});

$("#side_footer_dropdown_button").click(function(event){
  event.preventDefault();
  event.stopPropagation();
  $("#side_footer > .dropdown").css({display: "block"});
});

$(document).click(function(){
  $("#username > .dropdown").css({display: "none"});
  $("#side_footer .dropdown").css({display: "none"});
});



$("#signup_topbar .closebutton").click(function(){
  $("#signup_page").css({display: "none"});
});
$("#edit_topbar .closebutton").click(function(){
  $("#edit_link_page").css({display: "none"});
});



$("#addlink").click(function(){
  $("#signup_page").css({width: "100%", display: "block"});
});

$("#add_folder_button").click(function(){
  $("#add_folder_button a").css({display: "none"});
  $("#add_folder_button span").css({display: "inline-block"});
  $("#add_folder_button input").css({display: "inline-block"});
});
