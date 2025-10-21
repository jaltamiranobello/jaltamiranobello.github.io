<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>File Create/Write</h1>
        <h2>Create a file</h2>
        <?php
            $myfile = fopen("testFile.txt", "w");
        ?>
        <p>A file called testFile.txt is now in the same directory as this PHP file. (Not visible here)</p>
        <h2>Write To File</h2>
        <?php
            $myfile = fopen("testFile.txt", "w") or die("Unable to open file!");
            fwrite($myfile, "Smith College\n");
            fwrite($myfile, "CSC209: Web Programming\n");
            fclose($myfile);
        ?>
        <p>The testFile.txt now contains text. (Not visible here)</p>
        <h2>Overwrite File</h2>
        <?php
            $myfile = fopen("testFile.txt", "w") or die("Unable to open file!");
            fwrite($myfile, "Fernanda Altamirano\n");
            fwrite($myfile, "Smith College 2026\n");
            fclose($myfile);
        ?>
        <p>The testFile.txt contains new text. (Not visible here)</p>
        <h2>Append Text To File</h2> 
        <?php
            $myfile = fopen("testFile.txt", "a") or die("Unable to open file!");
            fwrite($myfile, "Smith College\n");
            fwrite($myfile, "CSC209: Web Programming\n");
            fclose($myfile);
        ?>
        <p>The testFile.txt contains the previous text and new text. See the final txt file here: <a href='testFile.txt' target="_blank">testFile.txt</a></p>   
    </body>
</html>