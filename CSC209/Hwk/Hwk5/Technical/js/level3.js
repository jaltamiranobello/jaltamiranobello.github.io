function createPoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //first circle
    ctx.beginPath();
    ctx.strokeStyle = "#8FB381";
    ctx.arc(475, 80, 20, 0, 2 * Math.PI)
    ctx.lineWidth = 5;
    ctx.stroke();
    //speed: slow (25 increment/decrement)
    // direction: diagonal down left
    ctx.beginPath();
    ctx.moveTo(475, 80);
    ctx.lineTo(450, 105);
    ctx.stroke();

    //second circle
    ctx.beginPath();
    ctx.strokeStyle = "#F7F2A3";
    ctx.arc(400, 400, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: medium (55 increment/decrement)
    // direction: left
    ctx.beginPath();
    ctx.moveTo(400, 400);
    ctx.lineTo(345, 400);
    ctx.stroke();

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(50, 300, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: fast (85 increment/decrement)
    // direction: diagonal up right
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(135, 215);
    ctx.stroke();
}

function changeLocation(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    firstXcor = Math.floor(Math.random() * ((canvas.width - 20) - 20 + 1) + 20);
    firstYcor =  Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);

    secondXcor = Math.floor(Math.random()  * ((canvas.width - 20) - 20 + 1) + 20);
    secondYcor = Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);

    thirdXcor = Math.floor(Math.random()  * ((canvas.width - 20) - 20 + 1) + 20);
    thirdYcor = Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);

    //first circle
    ctx.beginPath();
    ctx.strokeStyle = "#8FB381";
    ctx.arc(firstXcor, firstYcor, 20, 0, 2 * Math.PI)
    ctx.lineWidth = 5;
    ctx.stroke();
    //speed: slow (25 increment/decrement)
    // direction: diagonal down left
    ctx.beginPath();
    ctx.moveTo(firstXcor, firstYcor);
    ctx.lineTo(firstXcor - 25, firstYcor + 25);
    ctx.stroke();

    //second circle
    ctx.beginPath();
    ctx.strokeStyle = "#F7F2A3";
    ctx.arc(secondXcor, secondYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: medium (55 increment/decrement)
    // direction: left
    ctx.beginPath();
    ctx.moveTo(secondXcor, secondYcor);
    ctx.lineTo(secondXcor - 55, secondYcor);
    ctx.stroke();

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(thirdXcor, thirdYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: fast (85 increment/decrement)
    // direction: diagonal up right
    ctx.beginPath();
    ctx.moveTo(thirdXcor, thirdYcor);
    ctx.lineTo(thirdXcor + 85, thirdYcor - 85);
    ctx.stroke();
}
