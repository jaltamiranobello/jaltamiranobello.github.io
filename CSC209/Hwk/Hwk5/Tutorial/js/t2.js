const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//start drawing path
ctx.beginPath();
//set a starting point for the line (only if not 0,0)
ctx.moveTo(400, 0);
//set an end point for the line
ctx.lineTo(200,400);
//set the style for the line -> "stroke", always before executing the stroke
ctx.strokeStyle = "darkgreen";
//set the line width for the line, always before executing the stroke
ctx.lineWidth = 10;
//execute the line path
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(400,200);
ctx.strokeStyle = "#521D63";
ctx.lineWidth = 2;
ctx.stroke();