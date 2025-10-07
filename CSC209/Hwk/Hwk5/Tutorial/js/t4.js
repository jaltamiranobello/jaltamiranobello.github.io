const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//draw a circle
ctx.arc(395, 395, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#A87CBF";
ctx.fill();
ctx.strokeStyle = "#5C4569";
ctx.lineWidth = 5;
ctx.stroke();

//assign by how much the following elements will move by in x, y coordinates from 0,0
ctx.translate(50, 50);
//Start point is now 50, 50
//draw a rectangle
ctx.fillStyle = "#7CBF7C";
// the rectangle will actually be drawn ay (175, 175)
ctx.fillRect(125, 125, 150, 150);


