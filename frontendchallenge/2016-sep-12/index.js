$(document).ready(function(){
  //BUTTON HANDLERS
  $(".prev").click(function(){
    plusSlides(-1);
    setupSlides();
  });

  $(".next").click(function(){
    plusSlides(1);
    setupSlides();
  });
  //BUTTON HANDLERS END

  //INIT
  var currPosition = 0;
  setupSlides();
  //END
  

  function plusSlides(n){
    if(parseInt(n) > 0){
      currPosition++;
      if(currPosition >= $(".slide").length){
        currPosition = 0
      }
    }else{
      currPosition--;
      if(currPosition < 0){
        currPosition = $(".slide").length - 1;
      }
    }
  }

  function setupSlides(){
    var slides = $(".slide");
    var dots = $(".dot");

    for(var i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currPosition].style.display = "block";
    dots[currPosition].className += " active";
  }

});
