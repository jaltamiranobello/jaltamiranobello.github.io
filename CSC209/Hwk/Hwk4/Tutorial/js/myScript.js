function createInputButton() {
  let section = document.getElementById('1');
  let newInputButton = document.createElement("INPUT");
  newInputButton.setAttribute("type", "button");
  //counts the number of elements in the 'section' div
  let num = section.childElementCount + 1;
  newInputButton.setAttribute("value", "Button #" + num);
  section.appendChild(newInputButton);
}

function createCheckbox() {
  let newCheckbox = document.createElement("INPUT");
  newCheckbox .setAttribute("type", "checkbox");
  let section = document.getElementById('2');
  section.appendChild(newCheckbox);
}

function createColor(){
    let newColor = document.createElement("INPUT");
    newColor.setAttribute("type", "color");
    //Set the color using the value property
    newColor.setAttribute("value", "#ADD8E6")
    //newColor.value="#ADD8E6";
    let section = document.getElementById('3');
    section.appendChild(newColor);
}

function createDate(){
    let newDate = document.createElement("INPUT");
    newDate.setAttribute("type", "date");
    let section = document.getElementById('4');
    section.appendChild(newDate);
}

function createDateTime(){
    let newDateTime = document.createElement("INPUT");
    newDateTime.setAttribute("type", "datetime-local");
    let section = document.getElementById('5');
    section.appendChild(newDateTime);
    section.appendChild(newDateTime);
}

function createEmailInput(){
    let newEmailInput = document.createElement("INPUT");
    newEmailInput.setAttribute("type", "email");
    newEmailInput.setAttribute("value", "example@example.com");
    let section = document.getElementById('6');
    section.appendChild(newEmailInput);
}

function createFileInput(){
    let newFileInput = document.createElement("INPUT");
    newFileInput.setAttribute("type", "file");
    let section = document.getElementById('7');
    section.appendChild(newFileInput);
}

function createNumberInput(){
    let newNumberInput = document.createElement("INPUT");
    newNumberInput.setAttribute("type", "number");
    newNumberInput.setAttribute("value", "15");
    let section = document.getElementById('8');
    section.appendChild(newNumberInput);
}

function createPasswordInput(){
    let newPasswordInput = document.createElement("INPUT");
    newPasswordInput.setAttribute("type", "password");
    let section = document.getElementById('9');
    section.appendChild(newPasswordInput);
}

function createRadioInput(){
    let newRadioInput = document.createElement("INPUT");
    newRadioInput.setAttribute("type", "radio");
    let section = document.getElementById('10');
    section.appendChild(newRadioInput);
}

function createRangeInput(){
    let newRangeInput = document.createElement("INPUT");
    newRangeInput.setAttribute("type", "range");
    let section = document.getElementById("11");
    section.appendChild(newRangeInput);
}

function createSearchInput(){
    let newSearchInput = document.createElement("INPUT");
    newSearchInput.setAttribute("type", "search");
    let section = document.getElementById("12");
    section.appendChild(newSearchInput);
}

function createTextInput(){
    let newTextInput = document.createElement("INPUT");
    newTextInput.setAttribute("type", "text");
    newTextInput.setAttribute("value", "Type Text Here...");
    let section = document.getElementById("13");
    section.appendChild(newTextInput);
}

function createTimeInput(){
    let newTimeInput = document.createElement("INPUT");
    newTimeInput.setAttribute("type", "time");
    //newTimeInput.setAttribute("value", "21:35:09");
    let section = document.getElementById("14");
    section.appendChild(newTimeInput);
}