function getNumber(){
    let par = document.createElement("p");
    let number = document.createTextNode(Math.floor(Math.random() * 50));
    par.appendChild(number);
    document.body.appendChild(par);
}