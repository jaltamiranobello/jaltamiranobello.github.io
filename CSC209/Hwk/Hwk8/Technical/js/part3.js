/* Reference code used to understand how to sort string object values and numerical object values in function sortTable:
    - https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2 
    - https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
    Reference used to learn how to redirect on JS:
    - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage
*/

function makeTable(usersInfo){
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
    headerRow.appendChild(column4);
    //endof new row
    table.appendChild(headerRow);
    //Create table rows with data
    let totalUsers = usersInfo.length;
    let currUser, userName, userPass, userLog;
    let userMins;
    let userRow, cell1, cell1Text, cell2, cell2Text, cell3, cell3Text;
    let cell4, cell4Text;
    for(let i = 0; i < totalUsers; i++){
        currUser = usersInfo[i];
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
            usersInfo.sort(function(obj1, obj2){
                let obj1_userName = obj1.username.toLowerCase();
                let obj2_userName = obj2.username.toLowerCase();
                if (obj1_userName < obj2_userName) {return -1;}
                if (obj1_userName > obj2_userName) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersInfo);
        }
        else{// order == "-" which means descending order
            usersInfo.sort(function(obj1, obj2){
                let obj1_userName = obj1.username.toLowerCase();
                let obj2_userName = obj2.username.toLowerCase();
                if (obj1_userName > obj2_userName) {return -1;}
                if (obj1_userName < obj2_userName) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersInfo);
            header = document.getElementById('col1');
            header.setAttribute('onclick', "sortTable('username', '+')");
        }
    }
    else if(sortByVal == "password"){
        if (order == "+"){
            usersInfo.sort(function(obj1, obj2){
                let obj1_pass = obj1.password.toLowerCase();
                let obj2_pass = obj2.password.toLowerCase();
                if (obj1_pass < obj2_pass) {return -1;}
                if (obj1_pass > obj2_pass) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersInfo);
            header = document.getElementById('col2');
            header.setAttribute('onclick', "sortTable('password', '-')");
        }
        else{// order == "-" which means descending order
            usersInfo.sort(function(obj1, obj2){
                let obj1_pass = obj1.password.toLowerCase();
                let obj2_pass = obj2.password.toLowerCase();
                if (obj1_pass > obj2_pass) {return -1;}
                if (obj1_pass < obj2_pass) {return 1;}
                return 0;
            });
            element.remove();
            makeTable(usersInfo);
        }
    }
    else{ //sortByVal == "loggedtimes"
        if (order == "+"){
            usersInfo.sort(function(obj1, obj2){return obj1.loggedtimes - obj2.loggedtimes});
            element.remove();
            makeTable(usersInfo);
            header = document.getElementById('col3');
            header.setAttribute('onclick', "sortTable('loggedtimes', '-')");
        }
        else{
            usersInfo.sort(function(obj1, obj2){return obj2.loggedtimes - obj1.loggedtimes});
            element.remove();
            makeTable(usersInfo);
        }
    }
}

function adminLogOut(){
    location.replace("../htmlPhp/login.html.php");
}