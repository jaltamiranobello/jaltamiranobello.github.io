function changeStyle(){
    if (document.getElementById("style-option").getAttribute('href') == "CSS/style1.css"){
        document.getElementById("style-option").href = "CSS/style2.css";
    }
    else{
        document.getElementById("style-option").href = "CSS/style1.css";
    }
}

function hide(){
    document.getElementById("secret").innerText = "";
    document.getElementById("hidden").innerText = "Read Me";
    document.getElementById("hidden").onclick = secretText;
    document.getElementById("hidden").id = "read";
}

function secretText(){
    document.getElementById("secret").innerText = "You found the secret message!"
    document.getElementById("read").innerText = "Hide Me";
    document.getElementById("read").onclick = hide;
    document.getElementById("read").id = "hidden";
}

function showCredits() {
    let credits = document.getElementById("creditList");
    //Resource used to access a CSS propery value -> https://zellwk.com/blog/css-values-in-js/
    let creditsStyle = getComputedStyle(credits);
    if (creditsStyle.display === "none") {
        credits.style.display = "block";
    }
    else {
        credits.style.display = "none";
    }
}

function showDate(){
    let currentDate = new Date();
    document.getElementById("date").innerHTML = currentDate.toDateString();
}

function hideSchedule(){
    let table = document.getElementById("sched");
    //Resource used to access a CSS propery value -> https://zellwk.com/blog/css-values-in-js/
    let tableStyle = getComputedStyle(table);
    if (tableStyle.display == "none"){
        table.style.display = "table";
    }
    else{
        table.style.display = "none";
    }
}

function moveNav(){
    let page = document.getElementsByClassName("outer-page")[0];
    let nav = document.getElementsByTagName("nav")[0];
    //Resource used to access a CSS propery value -> https://zellwk.com/blog/css-values-in-js/
    let pageStyle = getComputedStyle(page);

    if (pageStyle.flexDirection == "row"){
        page.style.flexDirection = "column";
        nav.style.width = "100%";
        nav.style.display = "block";
        nav.style.textAlign = "center";
    }
    else{
        page.style.flexDirection = "row";
        nav.style.width = "15%";
        nav.style.display = "flex";
        nav.style.textAlign = "left";
    }
}

function hideRow(rowID){
    let row = document.getElementById(rowID);
    row.style.display = "none";
}

function showRows(tableName){
    let table = document.getElementById(tableName);
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "table-row";
    }
}
