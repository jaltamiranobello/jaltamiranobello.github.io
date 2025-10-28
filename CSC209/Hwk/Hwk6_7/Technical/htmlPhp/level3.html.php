<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/level3.php';
            $imageFileNames = glob("../Images/Space/*.jpg");
            $imagesNr = count($imageFileNames);
        ?>
        <script src="../js/level3.js"></script>
    </head>
    <body>
        <body style="background-color:antiquewhite"></body>
        <h1 style="text-align:center;background-color:cornflowerblue;color:antiquewhite">Level 3</h1>
        <a href="../technical.html">Return To Technical</a><br><br>
        <p>Select an image to display:</p>
        <?php
            addRadioButtons($imageFileNames, $imagesNr);
            addImages($imageFileNames, $imagesNr);
        ?>
    </body>
</html>