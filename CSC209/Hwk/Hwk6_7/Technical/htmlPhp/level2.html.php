<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/level2.php';
            $imageFileNames = glob("../Images/Space/*.jpg");
            $imagesNr = count($imageFileNames);
        ?>
    </head>
    <body>
        <body style="background-color:antiquewhite"></body>
        <h1 style="text-align:center;background-color:cornflowerblue;color:antiquewhite">Level 2</h1>
        <a href="../technical.html">Return To Technical</a><br><br>
        <?php
            addImages($imageFileNames, $imagesNr);
        ?>
    </body>
</html>