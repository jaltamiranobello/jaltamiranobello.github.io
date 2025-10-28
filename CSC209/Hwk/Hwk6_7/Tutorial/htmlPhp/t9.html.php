<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <h1>File Open/Read</h1>
        <h2>Functions: fopen(), feof(), fgets(), and fclose()</h2>
        <?php
            $myfile = fopen("../txt/plainEx.txt", "r") or die("Unable to open file!");
            while(!feof($myfile)) {
                echo (fgets($myfile)."<br>");
            }
            fclose($myfile);
        ?>    
    </body>
</html>