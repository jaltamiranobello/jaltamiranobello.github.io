<?php
    include '../whereami2.html.php';
    $currFolder = realpath("../../Lab11");
    $labNr = extractFolderNumber($currFolder);
    echo ("<h1>My lab number is $labNr</h1>");
?>