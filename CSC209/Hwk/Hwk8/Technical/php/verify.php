<?php
    include '../php/lab14.php';

    $usersInfoFilePath = "../json/users.json";
    $usersInfo = makeArray($usersInfoFilePath);
    $userNameInput = $_POST["username"];
    $userPassInput = $_POST["password"];

    $admin = isAdmin($usersInfo, $userNameInput, $userPassInput);
    tryLogIn($usersInfo, $userNameInput, $userPassInput, $admin);
?>