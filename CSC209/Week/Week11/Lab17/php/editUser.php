<?php
    include "library.php";
    $originalUsername = $_POST["originalUsername"];
    $newUsername = $_POST["username"];
    $newPassword = $_POST["password"];
    // Read and decode users.json.
    $dataFile = "../json/users.json";
    $data = createPhpArray($dataFile);
    // Update the user entry with the new values.
    $userID = findUserId($data, $originalUsername);
    $data[$userID]->username = $newUsername;
    $data[$userID]->password = $newPassword;
    // If the username changed, rename the user’s folder. (See PHP rename() Function)
    rename("../Users/".$originalUsername, "../Users/".$newUsername);
    // Write the updated array back to users.json.
    updateFileUserDeletion($data, $dataFile);
    //send back to adminPage
    header("Location: ../html/admin.html.php");
    exit();
?>
