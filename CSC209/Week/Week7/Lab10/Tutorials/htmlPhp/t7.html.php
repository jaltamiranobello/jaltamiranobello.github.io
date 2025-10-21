<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>Incldue Files </h1>
        <h2>Include</h2>
        <p>This example has a valid file with an image created with PHP and uses include so it runs smoothly: </p>
        <?php
            include 'includeEx.php';
        ?>
        <!-- <p>This example has an invalid file and uses include so it still runs since the php will execute even if the file is not found.</p>
        <p>Below is the warning: </p> -->
        <?php
            //include 'fakeIncludeEx.php';
            //echo "<br>";
            //echo "This sentence follows the invalid include statement.";
        ?>
        <h2>Require</h2>
        <p>The php will NOT run if the file is not found.</p>
        <p>This example has a valid file with a div element created with PHP and uses require so it runs smoothly:</p>
        <?php
            include 'requireEx.php';
        ?>
        <!-- <p>This example has an invalid file and uses require so nothing after the require statement is executed</p>
        <p>Below is the error: </p> -->
        <?php
            //require 'fakeRequireEx.php';
            //echo "This sentence follows the require statement";
        ?>   
    </body>
</html>