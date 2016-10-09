navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

if(!navigator.getMedia){
  console.log("[%s] Camera API ABSENT", new Date().toLocaleTimeString());
}else{
  console.log("[%s] Camera API PRESENT", new Date().toLocaleTimeString());
}

function getNumberOfViews(){
  return document.getElementsByClassName("primary_view").length;
}

function nextSlide(){
  currView++;
  console.log("nextSlide: %s", currView);
  if(currView >= getNumberOfViews()){
    currView = 0;
  }
  return currView;

  //ONE LINER, doesn't work though...
  //return (++currView >= getNumberOfViews()) ? 0 : currView;

}
function previousSlide(){
  currView--;
  if(currView < 0){
    currView = getNumberOfViews() - 1;
  }
  return currView;

  //ONE LINER, doesn't work though...
  //return (--currView < 0) ? (getNumberOfViews() - 1) : currView;
}

var currView = 0;



function setup(){
  var allViews = document.getElementsByClassName("primary_view");
  var progSlider = document.getElementsByClassName("slot");
  console.log(currView);
  for(var i = 0; i < allViews.length; i++){
      allViews[i].style.display = "none";
      progSlider[i].style.backgroundColor = "pink";
  }
  allViews[currView].style.display = "block";
  progSlider[currView].style.backgroundColor = "blue";
}

function leftArrowClick(){
  previousSlide();
  setup();
}

function rightArrowClick(){
  nextSlide();
  setup();
}

setup();


window.onkeydown = function(e){
  var code = e.keyCode ? e.keyCode : e.which;
  if(code === 38 || code === 34 || code === 39){
    //UpArrow, PageDown, Right Arrow
    nextSlide();
    setup();
  }else if(code === 40 || code === 33 || code === 37){
    //DownArrow, PageUp, LeftArrow
    previousSlide()
    setup();
  }
};
