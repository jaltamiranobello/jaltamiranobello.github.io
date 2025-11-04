/* Reference used to learn how to calculate minutes from Date objects: 
    - https://www.geeksforgeeks.org/javascript/how-to-calculate-minutes-between-two-dates-in-javascript/
    Reference used to learn how to redirect on JS:
    - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage
*/

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
    location.replace("../htmlPhp/login.html.php");
}