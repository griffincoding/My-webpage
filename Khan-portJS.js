
$(document).ready(function() {
  var canvas = document.getElementById("my-drawing");
  new Processing(canvas, function(processing) {
  processing.setup = function() {
  	processing.size(600,500);
  } 

//start of khan code
var xPositions = [processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400),processing.random( 1, 400)];
   
var yPositions = [processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random( 1, 400), processing.random(1, 400)];

var colors = [ 0, 50, 100, 150, 200, 255];

processing.draw = function() {
    processing.background(48, 159, 179);
    console.log(processing.mouse)
    
    var mouseClicked = function() {
    processing.xPositions.processing.push(processing.random(0,400));
    processing.yPositions.processing.push(processing.random(0,400));
    }
    
    for (var i = 0; i < xPositions.length; i++) {
        
        processing.noStroke();
        processing.fill(colors[i], colors[i], 0);
        processing.ellipse(xPositions[i], yPositions[i] , 10, 10);
        processing.ellipse(xPositions[i]+ 70, yPositions[i] +35, 10, 10);
        
        yPositions[i] += 1;
        
        if(yPositions[i] > 500) {
            yPositions[i] = -100;
        }
    }   
};
  //end of khan code
  });
});