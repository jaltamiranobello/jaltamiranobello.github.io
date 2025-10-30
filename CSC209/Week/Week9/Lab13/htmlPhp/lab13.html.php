<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/lab13.php';
        ?>
    </head>
    <body>
        <h1>Lab 13: Part 1</h1>
        <?php
            $myfile = "../json/users.json";
            $phpArray = makeArray($myfile);
            var_dump($phpArray);
            //echo "<br><br>";
        ?>  
    </body>
</html>