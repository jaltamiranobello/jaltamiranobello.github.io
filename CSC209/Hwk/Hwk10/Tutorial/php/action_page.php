<?php
    $username = $_POST["uname"];
    $password = $_POST["psw"];

    echo("<h1>Welcome ".ucfirst($username)."</h1>");
    echo("<h3>User Information</h3>");
    echo("Username: ".$username."<br>");
    echo("Password: ".$password);
?>