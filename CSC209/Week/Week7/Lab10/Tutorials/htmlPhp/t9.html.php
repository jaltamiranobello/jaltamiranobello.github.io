<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>File Open/Read</h1>
        <h2>Functions: fopen(), feof(), fgets(), and fclose()</h2>
        <?php
            $myfile = fopen("../../txt/plainEx.txt", "r") or die("Unable to open file!");
            while(!feof($myfile)) {
                echo (fgets($myfile)."<br>");
            }
            fclose($myfile);
        ?>    
    </body>
</html>