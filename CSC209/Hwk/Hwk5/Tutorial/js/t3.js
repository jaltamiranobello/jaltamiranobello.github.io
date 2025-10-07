const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//start a drawing path
ctx.beginPath();
//assign the start point if not 0,0
ctx.moveTo(100, 50);
//select the next coordinate
ctx.lineTo(75, 350);
//select the next coordinate
ctx.lineTo(400, 350);
//select the next coordinate
ctx.lineTo(425, 50);
//select the next coordinate
ctx.lineTo(250, 200);
//draws a line back to the start point of the path
ctx.closePath()
//assing a fill color
ctx.fillStyle = "antiquewhite";
//execute the fill style
ctx.fill();
//set the color for stroke line
ctx.strokeStyle = "darkblue";
//set the line width
ctx.lineWidth = 5;
//execute the drawing path for the shape
ctx.stroke();
