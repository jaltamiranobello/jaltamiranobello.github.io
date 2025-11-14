<?php
    include "library.php";
    $username = $_REQUEST["username"];
    $dataFile = "../json/users.json";
    $data = createPhpArray($dataFile);
    // get the index of the user with the given username
    $userId = findUserId($data, $username);
    //remove the user from the array by it's index
    array_splice($data, $userId, 1);
    //update the json file
    updateFileUserDeletion($data, $dataFile);
    //remove images
    $userFolder = "../Users/".$username;
    $images = glob($userFolder."/*");
    foreach ($images as $image){
        unlink($image);
    }
    //remove folder
    rmdir($userFolder);
?>