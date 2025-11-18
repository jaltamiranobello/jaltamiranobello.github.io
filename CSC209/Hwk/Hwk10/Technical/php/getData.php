<?php
    include "library.php";
    $dataFile = "../json/users.json";
    $data = createPhpArray($dataFile);
    echo (json_encode($data));
?>