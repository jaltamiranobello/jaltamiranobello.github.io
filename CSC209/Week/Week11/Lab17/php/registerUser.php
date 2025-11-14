<?php
    include "library.php";
    $username = strtolower($_POST["newUsername"]);
    $password = $_POST["newPassword"];
    // Reads and decodes users.json.
    $dataFile = "../json/users.json";
    $data = createPhpArray($dataFile);
    // Checks that the username doesn’t already exist.
    $userExits = userExists($data, $username);
    if($userExits){
        header("Location: ../html/login.html.php?register=error");
        exit();
    }
    // Adds a new entry to the user data.
    $new_user = new stdClass;
    $new_user->username = $username;
    $new_user->password = $password;
    $new_user->loggedtimes = 0;
    $new_user->minuteslogged = [];
    $data[] = $new_user;
    // Creates a folder in Users with the username as its name.
    $userFolder = "../Users/".$username;
    mkdir($userFolder);
    // Overwrites users.json with the updated information.
    updateFileUserDeletion($data, $dataFile);
    header("Location: ../html/login.html.php?register=success");
    exit();
?>