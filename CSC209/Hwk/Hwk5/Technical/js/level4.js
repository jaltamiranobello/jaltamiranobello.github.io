function assignPoints(){
    const canvas = document.getElementById("canvas");
    for (let i=0; i < NRPTS; i++){
        dirIdx = Math.floor(Math.random() * DIR.length);
        speedIdx = Math.floor(Math.random() * SPEED.length);
        circleXCor = Math.floor(Math.random() * ((canvas.width - 20) - 20 + 1) + 20);
        circleYCor = Math.floor(Math.random() * ((canvas.height - 20) - 20 + 1) + 20);
        POINTS[i][1] = circleXCor;
        POINTS[i][2] = circleYCor;
        POINTS[i][3] = DIR[dirIdx];
        if (SPEED[speedIdx] == "slow"){
            assignVectorEnd(i, 25);
        }
        else if (SPEED[speedIdx] == "medium"){
            assignVectorEnd(i, 55)
        }
        // speed is fast
        else{
            assignVectorEnd(i, 85)
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