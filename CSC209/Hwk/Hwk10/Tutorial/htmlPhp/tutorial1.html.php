<?php
    $filePath = "../txt/myFile.txt";
    $file = fopen($filePath,"w");
    fwrite($file,"This is written in my file!");
    fclose($file);
    echo ("File contents: ");
    echo (file_get_contents($filePath));
        // Orignal code starts here
        // unlink("../txt/myFile.txt");
    echo ("<br><br>");
        // echo("Removed file with path: ".$filePath);
        //Original code ends here
    if(!file_exists($filePath)) {
        echo ("Could not remove file with path:".$filePath);
    }
    else{
        unlink($filePath);
        echo("Removed file with path: ".$filePath);
    }
    echo ("<br><br>");
    $directoryPath = "../fileTest";
    if(!file_exists($directoryPath)) {
        echo ("Could not remove directory with path:".$directoryPath);
    }
    else{
        rmdir($directoryPath);
        echo("Removed directory with path: ".$directoryPath);
    }
?>