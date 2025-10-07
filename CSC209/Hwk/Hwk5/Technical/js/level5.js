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
    // clear the animation interval before moving the location in case animation is active
    clearInterval(intervalID);
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
    //update the POINTS
    POINTS[0][0] = firstXcor - 1;
    POINTS[0][1] = firstYcor + 1;
    POINTS[0][2] = (firstXcor - 1) - 25;
    POINTS[0][3] = (firstYcor + 1) + 25;

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
    //update the POINTS
    POINTS[1][0] = secondXcor - 1;
    POINTS[1][1] = secondYcor;
    POINTS[1][2] = (secondXcor - 1) - 55;
    POINTS[1][3] = secondYcor;

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
    //update the POINTS
    POINTS[2][0] = thirdXcor + 1;
    POINTS[2][1] = thirdYcor - 1;
    POINTS[2][2] = (thirdXcor + 1) + 85; 
    POINTS[2][3] = (thirdYcor - 1) - 85;
}

function startAnimation(){
    //clear before starting a new one in case old is still active
    clearInterval(intervalID)
    intervalID = setInterval(animatePoints, 20);
    currStep = 0;
}

function animatePoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    currStep += 1;
    if (currStep == NRSTEPS) {clearInterval(intervalID)};
}

function update(){
    let firstXcor = POINTS[0][0];
    let firstYcor = POINTS[0][1];
    let secondXcor = POINTS[1][0];
    let secondYcor = POINTS[1][1];
    let thirdXcor = POINTS[2][0];
    let thirdYcor = POINTS[2][1];
    //update the POINTS
    //since the first one is slow speed, update by one pixel per step
    POINTS[0][0] = firstXcor - 1;
    POINTS[0][1] = firstYcor + 1;
    POINTS[0][2] = (firstXcor - 1) - 25;
    POINTS[0][3] = (firstYcor + 1) + 25;
    //since the second circle is medium speed, update by 3 pixel per step
    POINTS[1][0] = (secondXcor - 3);
    POINTS[1][1] = secondYcor;
    POINTS[1][2] = (secondXcor - 3) - 55;
    POINTS[1][3] = secondYcor;
    //since the third circle is fast speed, update by 5 pixel per step
    POINTS[2][0] = thirdXcor + 5;
    POINTS[2][1] = thirdYcor - 5;
    POINTS[2][2] = (thirdXcor + 5) + 85; 
    POINTS[2][3] = (thirdYcor - 5) - 85;
}

function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let firstXcor = POINTS[0][0];
    let firstYcor = POINTS[0][1];
    let firstVecXcor = POINTS[0][2];
    let firstVecYcor = POINTS[0][3];

    let secondXcor = POINTS[1][0];
    let secondYcor = POINTS[1][1];
    let secondVecXcor = POINTS[1][2];
    let secondVecYcor = POINTS[1][3];

    let thirdXcor = POINTS[2][0];
    let thirdYcor = POINTS[2][1];
    let thirdVecXcor = POINTS[2][2]; 
    let thirdVecYcor = POINTS[2][3];
    
    //first circle
    ctx.beginPath();
    ctx.strokeStyle = "#8FB381";
    ctx.arc(firstXcor, firstYcor, 20, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke();
    //first vector
    ctx.beginPath();
    ctx.moveTo(firstXcor, firstYcor);
    ctx.lineTo(firstVecXcor, firstVecYcor);
    ctx.stroke();

    //second circle
    ctx.beginPath();
    ctx.strokeStyle = "#F7F2A3";
    ctx.arc(secondXcor, secondYcor, 20, 0, 2 * Math.PI);
    ctx.stroke();
    //second vector
    ctx.beginPath();
    ctx.moveTo(secondXcor, secondYcor);
    ctx.lineTo(secondVecXcor, secondVecYcor);
    ctx.stroke();

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(thirdXcor, thirdYcor, 20, 0, 2 * Math.PI);
    ctx.stroke();
    //third vector
    ctx.beginPath();
    ctx.moveTo(thirdXcor, thirdYcor);
    ctx.lineTo(thirdVecXcor, thirdVecYcor);
    ctx.stroke();
}