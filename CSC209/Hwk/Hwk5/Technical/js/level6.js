function assignPoints(){
    // clear the animation interval before generating new points in case animation is active
    clearInterval(intervalID);
    const canvas = document.getElementById("canvas");
    for (let i=0; i < NRPTS; i++){
        let dirIdx = Math.floor(Math.random() * DIR.length);
        let speedIdx = Math.floor(Math.random() * SPEED.length);
        let circleXCor = Math.floor(Math.random() * ((canvas.width - 20) - 20 + 1) + 20);
        let circleYCor = Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);
        POINTS[i][1] = circleXCor;
        POINTS[i][2] = circleYCor;
        POINTS[i][3] = DIR[dirIdx];
        POINTS[i][6] = SPEED[speedIdx]
        if (SPEED[speedIdx] == "slow"){
            assignVectorEnd(i, 25);
        }
        else if (SPEED[speedIdx] == "medium"){
            assignVectorEnd(i, 55);
        }
        else{ // speed is fast
            assignVectorEnd(i, 85);
        }
    }
    createPoints();
}

function assignVectorEnd(idx, increment){
    if (POINTS[idx][3] == "up"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1];
        // Vector End Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] - increment;
    }
    else if (POINTS[idx][3] == "down"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1];
        // Vector End Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] + increment;
    }
    else if (POINTS[idx][3] == "right"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] + increment;
        // Vector End Y-coordinate
        POINTS[idx][5] = POINTS[idx][2];
    }
    else if (POINTS[idx][3] == "left"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] - increment;
        // Vector End Y-coordinate
        POINTS[idx][5] = POINTS[idx][2];
    }
    else if (POINTS[idx][3] == "diagUpRight"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] + increment;
        // Vector Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] - increment;
    }
    else if (POINTS[idx][3] == "diagUpLeft"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] - increment;
        // Vector Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] - increment;
    }
    else if (POINTS[idx][3] == "diagDownRight"){
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] + increment;
        // Vector Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] + increment;
    }
    // direction set to diagDownLeft
    else{
        // Vector End X-coordinate
        POINTS[idx][4] = POINTS[idx][1] - increment;
        // Vector End Y-coordinate
        POINTS[idx][5] = POINTS[idx][2] + increment;
    }
}

function createPoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    //clear the canvas to generate new points
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i < NRPTS; i++){
        //create a circle
        ctx.beginPath();
        ctx.strokeStyle = POINTS[i][0];
        ctx.arc(POINTS[i][1], POINTS[i][2], 20, 0, 2 * Math.PI)
        ctx.stroke();
        // create a vector
        ctx.beginPath();
        ctx.moveTo(POINTS[i][1], POINTS[i][2]);
        ctx.lineTo(POINTS[i][4], POINTS[i][5]);
        ctx.stroke();
    }
}

function startAnimation(){
    // clear the animation interval before starting a new animation in case animation is active
    clearInterval(intervalID);
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

//create for loop to get the circleXCor, circleYcor, vectorEndXcor, vectorEndYcor, and speed to determine the new points
// for each item in POINTS get the coordinates and update them according to speed
function update(){
//format [color, circle X-coordinate, circle Y-coordinate, direction, end of line X-coordinate, end of line Y-coordinate, speed]
    for(let i = 0; i < NRPTS; i++){
        // get the current values
        let circleXCor = POINTS[i][1];
        let circleYCor = POINTS[i][2];
        let dir = POINTS[i][3];
        let speed = POINTS[i][6];
        let increment;
        let speedIncrement;
        if (speed == "slow"){
            increment = 25;
            speedIncrement = 1;
        }
        else if (speed == "medium"){
            increment = 55;
            speedIncrement = 3;
        }
        // speed is fast
        else{
            increment = 85;
            speedIncrement = 5;
        }
        updateByDirection(i, dir, increment, speedIncrement, circleXCor, circleYCor);
    }
}

function updateByDirection(idx, dir, increment, speedIncrement, circleXCor, circleYCor){
//format [color, circle X-coordinate, circle Y-coordinate, direction, end of line X-coordinate, end of line Y-coordinate, speed]
    if (dir == "up"){
        POINTS[idx][1] = circleXCor; // Circle X-coordinate
        POINTS[idx][2] = (circleYCor - speedIncrement); // Circle Y-coordinate
        POINTS[idx][4] = circleXCor; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor - speedIncrement) - increment; // Vector End Y-coordinate
    }
    else if (dir == "down"){
        POINTS[idx][1] = circleXCor; // Circle X-coordinate
        POINTS[idx][2] = (circleYCor + speedIncrement); // Circle Y-coordinate
        POINTS[idx][4] = circleXCor; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
    else if (dir == "right"){
        POINTS[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        POINTS[idx][2] = circleYCor; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        POINTS[idx][5] = circleYCor; // Vector End Y-coordinate
    }
    else if (dir == "left"){
        POINTS[idx][1] = circleXCor - speedIncrement; //Circle X-coordinate
        POINTS[idx][2] = circleYCor; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        POINTS[idx][5] = circleYCor; // Vector End Y-coordinate
    }
    else if (dir == "diagUpRight"){
        POINTS[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        POINTS[idx][2] = circleYCor - speedIncrement; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor - speedIncrement) - increment; // Vector End Y-coordinate
    }
    else if (dir == "diagUpLeft"){
        POINTS[idx][1] = circleXCor - speedIncrement; // Circle X-coordinate
        POINTS[idx][2] = circleYCor - speedIncrement; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor - speedIncrement) - increment;  // Vector End Y-coordinate
    }
    else if (dir == "diagDownRight"){
        POINTS[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        POINTS[idx][2] = circleYCor + speedIncrement; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
    else{ // direction set to diagDownLeft
        POINTS[idx][1] = circleXCor - speedIncrement; // Circle X-coordinate
        POINTS[idx][2] = circleYCor + speedIncrement; // Circle Y-coordinate
        POINTS[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        POINTS[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
}

function draw(){
// for each item in POINTS get the corodinates and color to draw them 
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    for(let i =0; i < NRPTS; i++){
        //draw the circle
        ctx.beginPath();
        ctx.strokeStyle = POINTS[i][0];
        ctx.arc(POINTS[i][1], POINTS[i][2], 20, 0, 2 * Math.PI);
        ctx.stroke();
        //draw the vector
        ctx.beginPath();
        ctx.moveTo(POINTS[i][1], POINTS[i][2]);
        ctx.lineTo(POINTS[i][4], POINTS[i][5]);
        ctx.stroke();
    }
}