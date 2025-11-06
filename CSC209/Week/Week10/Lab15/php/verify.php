<?php
    session_start();
    include '../php/library.php';
    $dataPath = "../json/users.json";
    $usersData = createPhpArray($dataPath);
    $username = $_POST["username"];
    $password = $_POST["password"];

    $isAdmin = verifyAdmin($usersData, $username, $password);
    if ($isAdmin){
        $_SESSION["username"] = $username;
        header("Location: ../html/admin.html.php");
        exit();
    }
    else{
        $userExists = verifyUser($usersData, $username, $password);
        if($userExists){
            $userId = getUserId($usersData, $username, $password);
            $_SESSION["username"] = $username;
            $_SESSION["password"] = $password;
            $_SESSION["userId"] = $userId;
            header("Location: ../html/user.html.php");
            exit();
        }
        else{
            header("Location: ../html/login.html.php?error=true");
            exit();
        }
    }
?>