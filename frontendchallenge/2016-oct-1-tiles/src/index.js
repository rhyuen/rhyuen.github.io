navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

if(!navigator.getMedia){
  //display error message on DOM;
  console.log("err");
}else{
  console.log("use camera");
  //use camera api.
}

window.onkeydown = function(e){
  var code = e.keyCode ? e.keyCode : e.which;
  if(code === 38 || code === 33 || code === 39){
    alert("up key  or page up or right key");
  }else if(code === 40 || code === 34 || code === 37){
    alert("down key or page down or left key");
  }
};
