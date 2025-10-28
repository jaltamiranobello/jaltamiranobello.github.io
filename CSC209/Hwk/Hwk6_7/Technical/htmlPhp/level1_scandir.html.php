<!-- The following links were used to complete this level:
        - https://www.w3schools.com/php/func_directory_scandir.asp :used to find the files in images
        - https://www.geeksforgeeks.org/php/how-to-pass-a-php-array-to-a-javascript-function/ : used to learn how to access PHP arrays in JS
 -->
<!DOCTYPE html>
<html>
    <head>
        <?php
            //Format using scandir()
            $ImagesFolder = "../Images/Space/";
            $imageFileNames = scandir($ImagesFolder);        
        ?>
        <script>
            //Keep this inside a script element to use JSON and then it can be referenced inside the actual js file
            const IMAGES = <?php echo json_encode($imageFileNames);?>;
        </script>
        <script src="../js/level1_scandir.js"></script>
    </head>
    <body>
        <body style="background-color:antiquewhite"></body>
        <h1 style="text-align:center;background-color:cornflowerblue;color:antiquewhite">Level 1: Using scandir(), JSON, and an external js file</h1>
        <a href="../technical.html">Return To Technical</a><br><br>
        <script>
            addImages();
        </script>
    </body>
</html>