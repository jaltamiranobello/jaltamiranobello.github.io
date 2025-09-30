   
function moveRed()
{   
    // gets the redquare element by the id
    var redSquare = document.getElementById("redSq"); 
    //sets the red squares position to start at 0 which is the left corner  
    var redPos = 0;
    // get the option value for the select element with the following id
    let speed = document.getElementById("redSpeed").value;
    // Calls the stepRed funciton every X miliseconds, the x miliseconds is determined by the speed variable above
    var stepRedId = setInterval(stepRed, speed);

    function stepRed() {
        if (redPos == 350) {
            //Once the square's position is at a border stop calling stepRed method every X miliseconds
            clearInterval(stepRedId);
        } else {
            redPos++; 
            redSquare.style.top = redPos + 'px'; 
            redSquare.style.left = redPos + 'px';
        }
    }
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
    var bluePos = 350;
    let speed = document.getElementById("blueSpeed").value;
    
    // Calls the stepRed funciton every X miliseconds
    var stepBlueId = setInterval(stepBlue, speed);

    function stepBlue() {
        if (bluePos == 0) {
            //Once the square's position is at a border stop calling stepRed method every X miliseconds
            clearInterval(stepBlueId);
        } else {
            bluePos--; 
            blueSquare.style.top = bluePos + 'px'; 
            blueSquare.style.left = bluePos + 'px';
        }
    }
}


