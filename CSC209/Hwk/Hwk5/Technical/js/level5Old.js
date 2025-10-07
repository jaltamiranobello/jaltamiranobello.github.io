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

//this funciton works and has everything done in one go, so you can't see each individual pixel change
// function animatePoints(){
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");
//     for(let i = 0; i < NRSTEPS; i++){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         //keep an array of the locations of the circle since its fixed to three points and the directions are fixed
//         // for number of steps move the point every increment miliseconds by +1 on the graph in the fixed direction
//         firstXcor = POINTS[0][0];
//         firstYcor =  POINTS[0][1];
//         firstVectorXcor = POINTS[0][2];
//         firstVectorYcor = POINTS[0][3];

//         secondXcor = POINTS[1][0] ;
//         secondYcor =  POINTS[1][1];
//         secondVectorXcor = POINTS[1][2];
//         secondVectorYcor = POINTS[1][3];


//         thirdXcor = POINTS[2][0] ;
//         thirdYcor =  POINTS[2][1];
//         thirdVectorXcor = POINTS[2][2];
//         thirdVectorYcor = POINTS[2][3];

//         //first circle
//         ctx.beginPath();
//         ctx.strokeStyle = "#8FB381";
//         ctx.arc((firstXcor -1), firstYcor, 20, 0, 2 * Math.PI)
//         ctx.lineWidth = 5;
//         ctx.stroke();
        
//         //speed: slow -> 5 means +/-25 each coordinate, radius plus the speed
//         // direction: diagonal down left
//         ctx.beginPath();
//         ctx.moveTo((firstXcor - 1), (firstYcor + 1));
//         ctx.lineTo((firstXcor - 1) - 25, (firstYcor + 1) + 25);
//         ctx.stroke();

//         //update the POINTS
//         POINTS[0][0] = firstXcor - 1;
//         POINTS[0][1] = firstYcor + 1;
//         POINTS[0][2] = (firstXcor - 1) - 25;
//         POINTS[0][3] = (firstYcor + 1) + 25;

//         //second circle
//         ctx.beginPath();
//         ctx.strokeStyle = "#F7F2A3";
//         ctx.arc((secondXcor - 1), secondYcor, 20, 0, 2 * Math.PI)
//         ctx.stroke();
        
//         //speed: medium -> 30increment means +/-50 each coordinate, radius plus the speed
//         // direction: left
//         ctx.beginPath();
//         ctx.moveTo((secondXcor - 1), secondYcor);
//         ctx.lineTo((secondXcor - 1) - 50, secondYcor);
//         ctx.stroke();


//         POINTS[1][0] = secondXcor - 1;
//         POINTS[1][1] = secondYcor;
//         POINTS[1][2] = (secondXcor - 1) - 50;
//         POINTS[1][3] = secondYcor;

//         //third circle
//         ctx.beginPath();
//         ctx.strokeStyle = "#D47F97";
//         ctx.arc(thirdXcor, thirdYcor, 20, 0, 2 * Math.PI)
//         ctx.stroke();
        
//         //speed: fast -> 45 means +/-65 each coordinate, radius plus the speed
//         // direction: diagonal up right
//         ctx.beginPath();
//         ctx.moveTo((thirdXcor + 1), (thirdYcor - 1));
//         ctx.lineTo((thirdXcor + 1) + 65, (thirdYcor - 1) - 65);
//         ctx.stroke();

//         POINTS[2][0] = thirdXcor + 1;
//         POINTS[2][1] = thirdYcor - 1;
//         POINTS[2][2] = (thirdXcor + 1) + 65; 
//         POINTS[2][3] = (thirdYcor - 1) - 65;
//     }
// }

//this funciton works in pair with three other functions
// function animatePoints(){
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");
//     for(let i = 0; i < NRSTEPS; i++){
//         //keep an array of the locations of the circle since its fixed to three points and the directions are fixed
//         // for each step move the point every [increment] miliseconds by +1 on the graph in the fixed direction
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         // let stepPointOne = setInterval(movePointOne, 25);
//         // let stepPointTwo = setInterval(movePointTwo, 50);
//         // let stepPointThree = setInterval(movePointThree, 65);
//         movePointOne();
//         movePointTwo();
//         movePointThree();
//         //console.log("STEP " + (i + 1) + ", First: " + POINTS[0]);
//         // clearInterval(stepPointOne);
//         // clearInterval(stepPointTwo);
//         // clearInterval(stepPointThree);
//     }
// }

function animatePoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    for(let i = 0; i < NRSTEPS; i++){
        //keep an array of the locations of the circle since its fixed to three points and the directions are fixed
        // for each step update the point coordinates
        // then draw it
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        update();
        draw();
    }
}

function update(){
    let firstXcor = POINTS[0][0];
    let firstYcor = POINTS[0][1];
    let secondXcor = POINTS[1][0];
    let secondYcor = POINTS[1][1];
    let thirdXcor = POINTS[2][0];
    let thirdYcor = POINTS[2][1];


    //update the POINTS
    POINTS[0][0] = firstXcor - 1;
    POINTS[0][1] = firstYcor + 1;
    POINTS[0][2] = (firstXcor - 1) - 25;
    POINTS[0][3] = (firstYcor + 1) + 25;

    POINTS[1][0] = (secondXcor - 1);
    POINTS[1][1] = secondYcor;
    POINTS[1][2] = (secondXcor - 1) - 55;
    POINTS[1][3] = secondYcor;

    POINTS[2][0] = thirdXcor + 1;
    POINTS[2][1] = thirdYcor - 1;
    POINTS[2][2] = (thirdXcor + 1) + 85; 
    POINTS[2][3] = (thirdYcor - 1) - 85;
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
    ctx.arc(firstXcor, firstYcor, 20, 0, 2 * Math.PI)
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
    ctx.arc(secondXcor, secondYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //second vector
    ctx.beginPath();
    ctx.moveTo(secondXcor, secondYcor);
    ctx.lineTo(secondVecXcor, secondVecYcor);
    ctx.stroke();

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(thirdXcor, thirdYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //third vector
    ctx.beginPath();
    ctx.moveTo(thirdXcor, thirdYcor);
    ctx.lineTo(thirdVecXcor, thirdVecYcor);
    ctx.stroke();
}

function movePointOne(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    firstXcor = POINTS[0][0];
    firstYcor =  POINTS[0][1];
    firstVectorXcor = POINTS[0][2];
    firstVectorYcor = POINTS[0][3];

    //first circle
    ctx.beginPath();
    ctx.strokeStyle = "#8FB381";
    ctx.arc((firstXcor - 1), firstYcor, 20, 0, 2 * Math.PI)
    ctx.lineWidth = 5;
    ctx.stroke();
        
    //speed: slow -> 5 means +/-25 each coordinate, radius plus the speed
    // direction: diagonal down left
    ctx.beginPath();
    ctx.moveTo((firstXcor - 1), (firstYcor + 1));
    ctx.lineTo((firstXcor - 1) - 25, (firstYcor + 1) + 25);
    ctx.stroke();

    //update the POINTS
    POINTS[0][0] = firstXcor - 1;
    POINTS[0][1] = firstYcor + 1;
    POINTS[0][2] = (firstXcor - 1) - 55;
    POINTS[0][3] = (firstYcor + 1) + 55;
}

function movePointTwo(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    secondXcor = POINTS[1][0] ;
    secondYcor =  POINTS[1][1];
    secondVectorXcor = POINTS[1][2];
    secondVectorYcor = POINTS[1][3];

    //second circle
    ctx.beginPath();
    ctx.strokeStyle = "#F7F2A3";
    ctx.arc((secondXcor - 1), secondYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    
    //speed: medium -> 30increment means +/-50 each coordinate, radius plus the speed
    // direction: left
    ctx.beginPath();
    ctx.moveTo((secondXcor - 1), secondYcor);
    ctx.lineTo((secondXcor - 1) - 55, secondYcor);
    ctx.stroke();

    POINTS[1][0] = secondXcor - 1;
    POINTS[1][1] = secondYcor;
    POINTS[1][2] = (secondXcor - 1) - 55;
    POINTS[1][3] = secondYcor;

}

function movePointThree(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    thirdXcor = POINTS[2][0] ;
    thirdYcor =  POINTS[2][1];
    thirdVectorXcor = POINTS[2][2];
    thirdVectorYcor = POINTS[2][3];

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(thirdXcor, thirdYcor, 20, 0, 2 * Math.PI)
    ctx.stroke();
    
    //speed: fast -> 45 means +/-65 each coordinate, radius plus the speed
    // direction: diagonal up right
    ctx.beginPath();
    ctx.moveTo((thirdXcor + 1), (thirdYcor - 1));
    ctx.lineTo((thirdXcor + 1) + 85, (thirdYcor - 1) - 85);
    ctx.stroke();

    POINTS[2][0] = thirdXcor + 1;
    POINTS[2][1] = thirdYcor - 1;
    POINTS[2][2] = (thirdXcor + 1) + 85; 
    POINTS[2][3] = (thirdYcor - 1) - 85;
}

