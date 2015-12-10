
$(document).ready(function() {
  var canvas = document.getElementById("my-drawing");
  new Processing(canvas, function(processing) {
  processing.setup = function() {
  	processing.size(600,500);
  } 

//start of khan code
var xPositions = [processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random(1, 400)];
   
var yPositions = [processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random(1, 400)];



processing.draw = function() {
    processing.background(100,150,230);
    
    
    processing.mouseClicked = function() {
   xPositions.push(processing.mouseX);
   yPositions.push(processing.mouseY);

    }
    
    for (var i = 0; i < xPositions.length; i++) {
        
        processing.noStroke();
        processing.fill(255,255,255);
        processing.ellipse(xPositions[i ]+ processing.random(-2, 2), yPositions[i] , 10, 10);
        //Line below makes it so two drops form when user clicks
        //processing.ellipse(xPositions[i]+ 70, yPositions[i] +35, 10, 10);
        
        yPositions[i] += 1;

        
        if(yPositions[i] > 500) {
            yPositions[i] = -100;
        }
    }   
};
  //end of khan code
  });
});