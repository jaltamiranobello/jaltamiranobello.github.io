<?php
    session_start();
    include '../php/library.php';
    $dataFile = "../json/users.json";
    $data = createPhpArray($dataFile);
    $minLogged = $_POST["minLogged"];
    updateFile($data, $_SESSION["userId"], $dataFile, $minLogged);
    session_destroy();
    header("Location: ../html/logout.html.php");
    exit();
?>