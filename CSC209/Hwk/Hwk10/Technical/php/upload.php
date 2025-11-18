<?php
    session_start();
    $folder = "../Users/".$_SESSION["username"]."/";
    $imgPath = $folder.basename($_FILES["imgFile"]["name"]);
    $imgExtension = strtolower(pathinfo($imgPath, PATHINFO_EXTENSION));

    $imgTmpPath = getimagesize($_FILES["imgFile"]["tmp_name"]);
    if($imgTmpPath == false){
        header("Location: ../html/user.html.php?fileUpload=1"); // not an image type recognized by PHP
        exit();
    }

    if (file_exists($imgPath)) {
        header("Location: ../html/user.html.php?fileUpload=2"); // the image file already exits
        exit();
    }

    if ($_FILES["imgFile"]["size"] > 500000) {
        header("Location: ../html/user.html.php?fileUpload=3"); //the image file is too large
        exit();
    }

    if($imgExtension != "jpg" && $imgExtension != "png" && $imgExtension != "jpeg" && $imgExtension != "gif"){
        header("Location: ../html/user.html.php?fileUpload=4"); // the image file is of another type
        exit();
    }

    if (move_uploaded_file($_FILES["imgFile"]["tmp_name"], $imgPath)) {
        header("Location: ../html/user.html.php");
        exit();
    }
    else {
        header("Location: ../html/user.html.php?fileUpload=5"); // the upload failed for another reason
        exit(); 
    }
?>