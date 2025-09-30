function changeHeader(){
    let headerVal = document.getElementById("chosenHeader").value;
    let newHeader = document.createElement("h2");
    let text = document.createTextNode(headerVal);
    newHeader.appendChild(text);
    document.body.appendChild(newHeader);
    document.getElementById("chosenHeader").value = "";
}

function changeBackground(){
    let color = document.getElementById("backgroundColorChoice").value;
    document.body.style.backgroundColor = color;
}

function addHeaderRadio(){
    let headerVal = document.getElementById("chosenHeader").value;
    let newHeader = document.createElement("h2");
    let text = document.createTextNode(headerVal);
    let fontChoice = document.querySelector('input[name="fontChoice"]:checked').value;
    let colorChoice = document.querySelector('input[name="colorChoice"]:checked').value
    newHeader.appendChild(text);
    newHeader.style.fontFamily = fontChoice;
    if (colorChoice == "yellow"){
        newHeader.style.color = "#FFEE00";
    }
    else if (colorChoice == "black"){
        newHeader.style.color = "black";
    }
    else{
            newHeader.style.color = "white";
    }
    document.body.appendChild(newHeader);
    document.getElementById("chosenHeader").value = "";
}