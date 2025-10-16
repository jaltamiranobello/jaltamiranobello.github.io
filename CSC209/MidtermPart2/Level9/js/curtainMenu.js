function toggleMenu(){
    let status = document.getElementById("myNav").style.display;
    if (status == "block"){
        document.getElementById("myNav").style.display = "none";
    }
    else{
        document.getElementById("myNav").style.display = "block";
    }
}

function addLinks(){
    let navigation, closeButton, buttonText, container;
    navigation = document.createElement('div');
    navigation.setAttribute('id', 'myNav');
    navigation.setAttribute('class', 'overlay');
    closeButton = document.createElement('a');
    closeButton.setAttribute('href', 'javascript:void(0)');
    closeButton.setAttribute('class', 'closebtn');
    closeButton.setAttribute('onclick', 'toggleMenu()');
    buttonText = document.createTextNode('x');
    closeButton.appendChild(buttonText);
    navigation.appendChild(closeButton);
    container = document.createElement('div');
    container.setAttribute('class', 'overlay-content');
    for (let i=0; i < NRPROJECTS; i++){
        let link = document.createElement('a');
        link.setAttribute('href', LINKS[i]);
        let text = document.createTextNode(TEXTS[i]);
        link.appendChild(text);
        container.appendChild(link);
    }
    navigation.appendChild(container);
    document.body.appendChild(navigation);
}