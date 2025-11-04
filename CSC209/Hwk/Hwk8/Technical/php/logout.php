<!-- 
 // Function timeLoggedIn
    1. Once the user.html.php page is loaded, call the startTime function, this function will use the getHours() and
        getMinutes() and return those values
    2. When the user clicks logout, call the timeLoggedIn() function, this function will use the getHours() and
        getMinutes() to get the end time and calculate the mintes from the end - start time and return it in the logout
        form
    3. 
 // User selects logout button
    1. Send the user to logout.php when logout button is clicked
    2. The logout form will send the user folder number, in logout.php go through the array and find the object
        matching the user number
    3. The logout form will send the number of minutes, in logout.php add the number to the end of the array at the
        objects index 3
    4. After the computation is done use the header() to redirect to logout.html.php
-->