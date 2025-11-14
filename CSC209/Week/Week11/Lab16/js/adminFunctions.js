function makeTable(){
    let table = document.createElement("table");
    table.setAttribute('id', 'usersTable');
    //Create header row
    let headerRow = document.createElement('tr');
    let column1 = document.createElement('th');
    let col1Text = document.createTextNode("Username");
    column1.appendChild(col1Text);
    column1.setAttribute('id', "col1");
    column1.setAttribute('onclick', "sortTable('username', '-')");
    headerRow.appendChild(column1);
    let column2 = document.createElement('th');
    let col2Text = document.createTextNode("Password");
    column2.appendChild(col2Text);
    column2.setAttribute('id', "col2");
    column2.setAttribute('onclick', "sortTable('password', '+')");
    headerRow.appendChild(column2);
    let column3 = document.createElement('th');
    let col3Text = document.createTextNode("# of Times Logged In");
    column3.appendChild(col3Text);
    column3.setAttribute('id', "col3");
    column3.setAttribute('onclick', "sortTable('loggedtimes', '+')");
    headerRow.appendChild(column3);
    //newrow
    let column4 = document.createElement('th');
    let col4Text = document.createTextNode("Minutes Logged In");
    column4.appendChild(col4Text);
    column4.setAttribute('id', "col4");
    column4.setAttribute('onclick', "sortTable('minutes', '+')");
    headerRow.appendChild(column4);
    //endof new row
    //new delete row header
    let column5 = document.createElement('th');
    let col5Text = document.createTextNode("Remove User");
    column5.appendChild(col5Text);
    headerRow.appendChild(column5);
    // end of delete row header
    //new edit row header
    let column6 = document.createElement('th');
    let col6Text = document.createTextNode("Update User Info");
    column6.appendChild(col6Text);
    headerRow.appendChild(column6);
    // end of delete row header
    table.appendChild(headerRow);
    //Create table rows with data
    let totalUsers = usersData.length;
    let currUser, userName, userPass, userLog;
    let userMins;
    let userRow, cell1, cell1Text, cell2, cell2Text, cell3, cell3Text;
    let cell4, cell4Text;
    let cell5, cell5Button, cell5Text;
    let cell6, cell6Button, cell6Text;
    for(let i = 0; i < totalUsers; i++){
        currUser = usersData[i];
        userName = currUser["username"];
        if (userName != "admin"){ //dont show admin among the users
            userPass = currUser["password"];
            userLog = currUser["loggedtimes"];
            userMins = currUser["minuteslogged"];
            userRow = document.createElement('tr');
            cell1 = document.createElement('td');
            cell1Text = document.createTextNode(userName);
            cell1.appendChild(cell1Text);
            userRow.appendChild(cell1);
            cell2 = document.createElement('td');
            cell2Text = document.createTextNode(userPass);
            cell2.appendChild(cell2Text);
            userRow.appendChild(cell2);
            cell3 = document.createElement('td');
            cell3Text = document.createTextNode(userLog);
            cell3.appendChild(cell3Text);
            userRow.appendChild(cell3);
            //new row
            cell4 = document.createElement('td');
            cell4Text = document.createTextNode(userMins);
            cell4.appendChild(cell4Text);
            userRow.appendChild(cell4);
            //end of new row
            //new delete row
            cell5 = document.createElement('td');
            cell5Button = document.createElement('button');
            cell5Text = document.createTextNode("Delete");
            cell5Button.appendChild(cell5Text);
            cell5Button.setAttribute("onclick", "deleteUser('" + userName + "')");
            cell5.appendChild(cell5Button);
            userRow.appendChild(cell5);
            //end of delete row
            //new edit row
            cell6 = document.createElement('td');
            cell6Button = document.createElement('button');
            cell6Text = document.createTextNode("Edit");
            cell6Button.appendChild(cell6Text);
            cell6Button.setAttribute("onclick", "editForm('" + userName + "')");
            cell6.appendChild(cell6Button);
            userRow.appendChild(cell6);
            //end of edit row
            table.appendChild(userRow);
        }
    }
    //add table to document
    document.body.appendChild(table);
}

function sortTable(sortByVal, order) {
    const element = document.getElementById("usersTable");
    let header;
    if(sortByVal == "username"){
        if (order == "+"){
            usersData.sort(function(obj1, obj2){
                let obj1_userName = obj1.username.toLowerCase();
                let obj2_userName = obj2.username.toLowerCase();
                if (obj1_userName < obj2_userName) {return -1;}
                if (obj1_userName > obj2_userName) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersData);
        }
        else{// order == "-" which means descending order
            usersData.sort(function(obj1, obj2){
                let obj1_userName = obj1.username.toLowerCase();
                let obj2_userName = obj2.username.toLowerCase();
                if (obj1_userName > obj2_userName) {return -1;}
                if (obj1_userName < obj2_userName) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersData);
            header = document.getElementById('col1');
            header.setAttribute('onclick', "sortTable('username', '+')");
        }
    }
    else if(sortByVal == "password"){
        if (order == "+"){
            usersData.sort(function(obj1, obj2){
                let obj1_pass = obj1.password.toLowerCase();
                let obj2_pass = obj2.password.toLowerCase();
                if (obj1_pass < obj2_pass) {return -1;}
                if (obj1_pass > obj2_pass) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersData);
            header = document.getElementById('col2');
            header.setAttribute('onclick', "sortTable('password', '-')");
        }
        else{// order == "-" which means descending order
            usersData.sort(function(obj1, obj2){
                let obj1_pass = obj1.password.toLowerCase();
                let obj2_pass = obj2.password.toLowerCase();
                if (obj1_pass > obj2_pass) {return -1;}
                if (obj1_pass < obj2_pass) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersData);
        }
    }
    else if(sortByVal == "loggedtimes"){
        if (order == "+"){
            usersData.sort(function(obj1, obj2){return obj1.loggedtimes - obj2.loggedtimes});
            element.remove();
            makeTable(usersData);
            header = document.getElementById('col3');
            header.setAttribute('onclick', "sortTable('loggedtimes', '-')");
        }
        else{
            usersData.sort(function(obj1, obj2){return obj2.loggedtimes - obj1.loggedtimes});
            element.remove();
            makeTable(usersData);
        }
    }
    else{ //sortByVal == "minutes" (sory by the length of the array same as sorting by loggedtimes)
        if (order == "+"){
            usersData.sort(function(obj1, obj2){return obj1.loggedtimes - obj2.loggedtimes});
            element.remove();
            makeTable(usersData);
            header = document.getElementById('col4');
            header.setAttribute('onclick', "sortTable('minutes', '-')");
        }
        else{
            usersData.sort(function(obj1, obj2){return obj2.loggedtimes - obj1.loggedtimes});
            element.remove();
            makeTable(usersData);
        }
    }
}

function adminLogOut(){
    location.replace("../html/logout.html.php");
}

function refreshTable(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        usersData = JSON.parse(this.responseText);
        table = document.getElementById("usersTable");
        table.remove();
        makeTable();
    }
    xhttp.open("GET", "../php/getData.php");
    xhttp.send();
}

function deleteUser(username){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        refreshTable();
        // usersData = JSON.parse(this.responseText);
        // table = document.getElementById("usersTable");
        // table.remove();
        // makeTable();
    }
    xhttp.open("GET", "../php/deleteUser.php?username=" + username);
    xhttp.send();
}

function editForm(username){
    removeEditForm();
    let form = document.createElement('form');
    form.setAttribute("id", "edit-form");
    form.setAttribute("action", "../php/editUser.php");
    form.setAttribute("method", "post");
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "close-button");
    button.setAttribute("onclick", "removeEditForm()");
    let buttonText = document.createTextNode(String.fromCharCode(10006));
    button.appendChild(buttonText);
    form.appendChild(button);
    let title = document.createElement("h3");
    let titleText = document.createTextNode("Update Information: " +  username.charAt(0).toUpperCase() + username.slice(1));
    title.appendChild(titleText);
    form.appendChild(title);
    //<input type="hidden" id="custId" name="custId" value="3487">
    let hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "originalUsername");
    hiddenInput.setAttribute("value", username);
    form.appendChild(hiddenInput);
    let label1 = document.createTextNode("New Username: ");
    form.appendChild(label1);
    let userNameInput = document.createElement("input");
    userNameInput.setAttribute("name", "username");
    userNameInput.setAttribute('type', 'text');
    form.appendChild(userNameInput);
    let linebr1 = document.createElement("br");
    form.appendChild(linebr1);
    let linebr2 = document.createElement("br");
    form.appendChild(linebr2);
    let userText = document.createTextNode("New Password: ");
    form.appendChild(userText);
    let userPassInput = document.createElement("input");
    userPassInput.setAttribute('type', 'password');
    userPassInput.setAttribute("name", "password");
    form.appendChild(userPassInput);
    let linebr3 = document.createElement("br");
    let linebr4 = document.createElement("br");
    form.appendChild(linebr3);
    form.appendChild(linebr4);
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'edit-submit');
    form.appendChild(submit);
    document.body.appendChild(form);
}

function removeEditForm(){
    currForm = document.getElementById('edit-form')
    if (currForm){
        currForm.remove();
    }
}