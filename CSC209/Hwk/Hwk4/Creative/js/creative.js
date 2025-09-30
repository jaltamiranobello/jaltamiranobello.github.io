//Reference on how to adjust image for div background: https://www.geeksforgeeks.org/css/how-to-fit-background-image-to-div-using-css/
addSquares();

function addSquares(){
    let squares_num = SQUARES.length;
    let container = document.getElementById("myContainer");
    for (let i=0; i < squares_num; i++){
        let top_pos = SQUARES[i][0];
        let left_pos = SQUARES[i][1];
        let imageName = SQUARES[i][3];
        let widthHeight = SQUARES[i][4];
        let newSquare = document.createElement('div');
        newSquare.id = "sq" + (i+1);
        container.appendChild(newSquare);
        newSquare.style.position = 'absolute';
        newSquare.style.width = widthHeight + "px";
        newSquare.style.height = widthHeight + "px";
        newSquare.style.top = top_pos + "px";
        newSquare.style.left = left_pos + "px";
        let imagePath = "url('images/" + imageName + "')";
        newSquare.style.backgroundImage = imagePath;
        newSquare.style.backgroundSize = "100%  100%";
    }
    let moveButton = document.createElement('button');
    let buttonText = document.createTextNode("Move All Flowers");
    moveButton.appendChild(buttonText);
    moveButton.setAttribute("onclick", "moveSquares()");
    moveButton.style.marginBottom = "15px";
    // adds the button before the container in the document
    document.body.insertBefore(moveButton, container);
}

function moveSquares(){
    let squares_num = SQUARES.length;
    for (let i=0; i < squares_num; i++){
        let square = document.getElementById("sq" + (i+1));
        let dir = SQUARES[i][2];
        let topPos = Number((square.style.top).slice(0, -2));
        let leftPos = Number((square.style.left).slice(0, -2));

        if (dir == "up"){
            let callmoveUp = setInterval(moveUp, 10);
            function moveUp(){
                if(topPos == 0){
                    clearInterval(callmoveUp);
                    SQUARES[i][2] = "down";
                }
                else{
                    topPos --;
                    square.style.top = topPos + "px";
                }
            }
        }
        else if (dir == "down"){
            let callmoveDown = setInterval(moveDown, 10);
            function moveDown(){
                if(topPos == 525){
                    clearInterval(callmoveDown);
                    SQUARES[i][2] = "up";
                }
                else{
                    topPos ++;
                    square.style.top = topPos + "px";
                }
            }
        }
        else if (dir == "left"){
            let callmoveLeft = setInterval(moveLeft, 10);
            
            function moveLeft(){
                if(leftPos == 0){
                    clearInterval(callmoveLeft);
                    SQUARES[i][2] = "right";
                }
                else{
                    leftPos --;
                    square.style.left = leftPos + "px";
                }
            }
        }
        else if (dir == "right"){
            let callmoveRight = setInterval(moveRight, 10);
            function moveRight(){
                if(leftPos == 525){
                    clearInterval(callmoveRight);
                    SQUARES[i][2] = "left";
                }
                else{
                    leftPos ++;
                    square.style.left = leftPos + "px";
                }
            }
        }
        // diagonalUpLeft: topPos -- and leftPos --
        else if (dir == "diagonalUpLeft"){
          let callDiagUpLeft = setInterval(moveDiagUpLeft, 10);
            function moveDiagUpLeft(){
                if(topPos == 0 || leftPos == 0){
                    clearInterval(callDiagUpLeft);
                    SQUARES[i][2] = "diagonalDownRight";
                }
                else{
                    topPos --;
                    leftPos --
                    square.style.top = topPos + "px";
                    square.style.left = leftPos + "px";
                }
            }  
        }
        // diagonalUpRight: topPos -- and leftPos ++
        else if (dir == "diagonalUpRight"){
          let callDiagUpRight = setInterval(moveDiagUpRight, 10);
            function moveDiagUpRight(){
                if(topPos == 0 || leftPos == 525){
                    clearInterval(callDiagUpRight);
                    SQUARES[i][2] = "diagonalDownLeft";

                }
                else{
                    topPos --;
                    leftPos ++;
                    square.style.top = topPos + "px";
                    square.style.left = leftPos + "px";
                }
            }  
        }        
        // diagonalDownLeft: topPos ++ and leftPos --
        else if (dir == "diagonalDownLeft"){
          let callDiagDownLeft = setInterval(moveDiagDownLeft, 10);
            function moveDiagDownLeft(){
                if(topPos == 525 || leftPos == 0){
                    clearInterval(callDiagDownLeft);
                    SQUARES[i][2] = "diagonalUpRight";

                }
                else{
                    topPos ++;
                    leftPos --;
                    square.style.top = topPos + "px";
                    square.style.left = leftPos + "px";
                }
            }  
        }
        // assuming it is diagonalDownRight: topPos ++ and leftPos ++
        else{
          let callDiagDownRight = setInterval(moveDiagDownRight, 10);
            function moveDiagDownRight(){
                if(topPos == 525 || leftPos == 525){
                    clearInterval(callDiagDownRight);
                    SQUARES[i][2] = "diagonalUpLeft";

                }
                else{
                    topPos ++;
                    leftPos ++;
                    square.style.top = topPos + "px";
                    square.style.left = leftPos + "px";
                }
            }  
        }
    }
}