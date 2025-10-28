<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <h1>File Handling</h1>
        <h2>Function: readfile()</h2>
        <p>Useful to open and read a file's contents (NOTE: will return the number of bytes read).</p>
        <?php
            echo readfile("../txt/plainEx.txt");
        ?>    
    </body>
</html>