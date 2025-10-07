function assignPoints(){
    //assing the array to an empty array to make sure there are no prevoius points set on the canvas
    points = [];
    // clear the animation interval before generating new points in case animation is active
    clearInterval(intervalID);
    let nPoints = document.getElementById("nPoints").value;
    const canvas = document.getElementById("canvas");
    for (let i=0; i < nPoints; i++){
        let dirIdx = Math.floor(Math.random() * DIR.length);
        let speedIdx = Math.floor(Math.random() * SPEED.length);
        let circleXCor = Math.floor(Math.random() * ((canvas.width - 20) - 20 + 1) + 20);
        let circleYCor = Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);
        let color = COLORS[Math.floor(Math.random() * COLORS.length)];
        // color, circle X-coordinate, circle Y-coordinate, direction, end of line X-coordinate, end of line Y-coordinate, speed
        let pointArr = new Array("color", 0, 0, "direction", 0, 0, "speed");
        pointArr[0] = color;
        pointArr[1] = circleXCor;
        pointArr[2] = circleYCor;
        pointArr[3] = DIR[dirIdx];
        pointArr[6] = SPEED[speedIdx]
        if (SPEED[speedIdx] == "slow"){
            assignVectorEnd(pointArr, 25);
        }
        else if (SPEED[speedIdx] == "medium"){
            assignVectorEnd(pointArr, 55);
        }
        else{ // speed is fast
            assignVectorEnd(pointArr, 85);
        }
        points.push(pointArr);
    }
    createPoints();
}

function assignVectorEnd(pointArr, increment){
    if (pointArr[3] == "up"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1];
        // Vector End Y-coordinate
        pointArr[5] = pointArr[2] - increment;
    }
    else if (pointArr[3] == "down"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1];
        // Vector End Y-coordinate
        pointArr[5] = pointArr[2] + increment;
    }
    else if (pointArr[3] == "right"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] + increment;
        // Vector End Y-coordinate
        pointArr[5] = pointArr[2];
    }
    else if (pointArr[3] == "left"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] - increment;
        // Vector End Y-coordinate
        pointArr[5] = pointArr[2];
    }
    else if (pointArr[3] == "diagUpRight"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] + increment;
        // Vector Y-coordinate
        pointArr[5] = pointArr[2] - increment;
    }
    else if (pointArr[3] == "diagUpLeft"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] - increment;
        // Vector Y-coordinate
        pointArr[5] = pointArr[2] - increment;
    }
    else if (pointArr[3] == "diagDownRight"){
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] + increment;
        // Vector Y-coordinate
        pointArr[5] = pointArr[2] + increment;
    }
    // direction set to diagDownLeft
    else{
        // Vector End X-coordinate
        pointArr[4] = pointArr[1] - increment;
        // Vector End Y-coordinate
        pointArr[5] = pointArr[2] + increment;
    }
}

function createPoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    //clear the canvas to generate new points
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i < points.length; i++){
        //create a circle
        ctx.beginPath();
        ctx.strokeStyle = points[i][0];
        ctx.arc(points[i][1], points[i][2], 20, 0, 2 * Math.PI)
        ctx.stroke();
        // create a vector
        ctx.beginPath();
        ctx.moveTo(points[i][1], points[i][2]);
        ctx.lineTo(points[i][4], points[i][5]);
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
    for(let i = 0; i < points.length; i++){
        // get the current values
        let circleXCor = points[i][1];
        let circleYCor = points[i][2];
        let dir = points[i][3];
        let speed = points[i][6];
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
        points[idx][1] = circleXCor; // Circle X-coordinate
        points[idx][2] = (circleYCor - speedIncrement); // Circle Y-coordinate
        points[idx][4] = circleXCor; // Vector End X-coordinate
        points[idx][5] = (circleYCor - speedIncrement) - increment; // Vector End Y-coordinate
    }
    else if (dir == "down"){
        points[idx][1] = circleXCor; // Circle X-coordinate
        points[idx][2] = (circleYCor + speedIncrement); // Circle Y-coordinate
        points[idx][4] = circleXCor; // Vector End X-coordinate
        points[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
    else if (dir == "right"){
        points[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        points[idx][2] = circleYCor; // Circle Y-coordinate
        points[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        points[idx][5] = circleYCor; // Vector End Y-coordinate
    }
    else if (dir == "left"){
        points[idx][1] = circleXCor - speedIncrement; //Circle X-coordinate
        points[idx][2] = circleYCor; // Circle Y-coordinate
        points[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        points[idx][5] = circleYCor; // Vector End Y-coordinate
    }
    else if (dir == "diagUpRight"){
        points[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        points[idx][2] = circleYCor - speedIncrement; // Circle Y-coordinate
        points[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        points[idx][5] = (circleYCor - speedIncrement) - increment; // Vector End Y-coordinate
    }
    else if (dir == "diagUpLeft"){
        points[idx][1] = circleXCor - speedIncrement; // Circle X-coordinate
        points[idx][2] = circleYCor - speedIncrement; // Circle Y-coordinate
        points[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        points[idx][5] = (circleYCor - speedIncrement) - increment;  // Vector End Y-coordinate
    }
    else if (dir == "diagDownRight"){
        points[idx][1] = circleXCor + speedIncrement; // Circle X-coordinate
        points[idx][2] = circleYCor + speedIncrement; // Circle Y-coordinate
        points[idx][4] = (circleXCor + speedIncrement) + increment; // Vector End X-coordinate
        points[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
    else{ // direction set to diagDownLeft
        points[idx][1] = circleXCor - speedIncrement; // Circle X-coordinate
        points[idx][2] = circleYCor + speedIncrement; // Circle Y-coordinate
        points[idx][4] = (circleXCor - speedIncrement) - increment; // Vector End X-coordinate
        points[idx][5] = (circleYCor + speedIncrement) + increment; // Vector End Y-coordinate
    }
}

function draw(){
// for each item in POINTS get the corodinates and color to draw them 
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    for(let i =0; i < points.length; i++){
        //draw the circle
        ctx.beginPath();
        ctx.strokeStyle = points[i][0];
        ctx.arc(points[i][1], points[i][2], 20, 0, 2 * Math.PI);
        ctx.stroke();
        //draw the vector
        ctx.beginPath();
        ctx.moveTo(points[i][1], points[i][2]);
        ctx.lineTo(points[i][4], points[i][5]);
        ctx.stroke();
    }
}