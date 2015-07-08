//When user interacts it will cause changes to the application

var color = $(".selected").css("background-color");
//selects the first html canvas tag element, and gets a 2d perpective
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items, uses "on" instead of "click" so that it adds dynamically
$(".controls").on("click", "li", function(){
  //Deselect all sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //store color
  color = $(this).css("background-color");
});

//When 'new color' is clicked
$("#revealColorSelect").click(function(){
  //update the color shown
  changeColor();
  //show or hide color select
  $("#colorSelect").toggle();
});

//update the new color
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}  
  
//When sliders are used
$("input[type=range]").change(changeColor);

//when 'add color' is clicked
$("#addNewColor").click(function() {
  //append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  //append the new color to the list
  $(".controls ul").append($newColor);
  //select the new color (must bind it to the listener since the list was previously bound when it loaded)
  $newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  //draw lines (make sure it's held down)
  if(mouseDown == true) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    //update the start to the new value for dragging
    lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
});

//TODO add a clear canvas button
