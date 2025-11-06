function getStartTime(){
    return new Date();
}

function timeLoggedIn(startTime){
    let endTime = new Date();
    let milisecondsLog = endTime - startTime;
    let minPassed = Math.round(milisecondsLog / 60000); //divide by 60k to convert miliseconds to minutes
    return minPassed;
}

function addMinLogged(startTime){
    let totalMins = timeLoggedIn(startTime);
    document.getElementById('minLogged').value = totalMins;
}

function openLogInPage(){
    location.replace("../html/login.html.php");
}

function userLogout(){
    //figure out how to store the return value from timeLoggedIn in a session variable minsPassed
    location.replace("../php/logout.php");
}