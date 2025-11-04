<?php
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["pass"];
    $sendMail = $_POST["mailingList"];
    echo("<h1>Subscription Successful!</h1>");
    echo("<p>User Info: ".$firstName." ".$lastName."</p>");
    echo("<p>Contact Email: ".$email."</p>");
    if($sendMail == "YES"){
        echo("<p>Check your email for your first newsletter!</p>");
    }
?>