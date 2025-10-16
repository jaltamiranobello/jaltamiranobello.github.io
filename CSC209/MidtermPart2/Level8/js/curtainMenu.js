function toggleMenu(){
    let status = document.getElementById("myNav").style.display;
    if (status == "block"){
        document.getElementById("myNav").style.display = "none";
    }
    else{
        document.getElementById("myNav").style.display = "block";
    }
}