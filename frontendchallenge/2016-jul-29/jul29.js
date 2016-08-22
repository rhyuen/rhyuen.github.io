navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

if(!navigator.getMedia){

}

navigator.getUserMedia({
  video: true
}, function(stream){
  video.src = window.URL.createObjectURL(stream);
  video.play();
  video.onplay = function(){
    showVideo();
  };
}, function(err){
  console.error(err);
  //PermissionDenied
  //DevicesNotFound
});

function takeSelfie(){
  var canvas = document.querySelector("canvas");
  var video = document.querySelector("video.camera_stream");
  var image = document.querySelector("img.photo");

  var v_width = video.videoWidth;
  var v_height = video.videoHeight;

  var context = canvas.getContext("2d");

  canvas.width = v_width;
  canvas.height = v_height;

  context.drawImage(video, 0, 0, v_width, v_height);
  var image_url = canvas.toDataUrl("image/png");
  image.setAttribute("src", image_url);
  document.querySelector("#download_button").href = image_url;

}
