

$(document).ready(function() {
  var slide = document.getElementById("image");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");

  var imgArray = ["Khan/ball2.gif", "Khan/future.gif", "Khan/Rain.png", "Khan/fish.gif", "Khan/House.png", "Khan/Bookshelf.png", "Khan/city.gif", "Khan/Popcorn.png", "Khan/carrot.gif", "Khan/Breakfast.png"]
  var currentImg = -1;
  var globalTimer;
  var transTimer;
  slide.width = 1000;
  slide.height = 400;
  
  transTimer = setInterval(function() {
      if (slide.width < 1000) {
    slide.width += 10;
    
    
  }
  }, 10);
  var startClicked = function() {
    globalTimer = setInterval(changeCurrentImage, 10000);
  }

  var stopClicked = function() {
    clearInterval(globalTimer);
  }

  var changeCurrentImage = function() {
    currentImg++;
    slide.src = imgArray[currentImg];
    slide.width = 0;
    slide.height = 400;
    console.log(currentImg)
    if (currentImg === imgArray.length - 1) {
      currentImg = -1;
    }
}
   
  start.addEventListener("click", startClicked);
  stop.addEventListener("click", stopClicked);
});
