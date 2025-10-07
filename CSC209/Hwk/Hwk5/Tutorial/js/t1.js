const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//Start a drawing path
ctx.beginPath();
//Define a circle drawing
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
//set the color for fill
ctx.fillStyle = "lightpink";
//execute the fill
ctx.fill();
//the default value of strokeStyle is black
ctx.strokeStyle = "hotpink";
//set the line width for stroke before executing it
ctx.lineWidth = 10;
//Draw the path you defined
ctx.stroke();
