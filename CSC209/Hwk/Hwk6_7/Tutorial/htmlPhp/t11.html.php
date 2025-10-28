<html>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <h2>File Open Set To Read</h2>
        <?php
            $file = fopen("../txt/test1.txt", "r");
            //Output lines until EOF is reached
            //while the pointer to the file is not at the end of the file
            while(!feof($file)) {
                //the fgets gets a line
                $line = fgets($file);
                echo ($line."<br>");
            }
            fclose($file);
        ?>
        <h2>File Open Set To Write</h2>
        <?php
            $file = fopen("../txt/test2.txt", "w");
            fwrite($file,"This is text file number two.");
            fclose($file);

            $file = fopen("../txt/test2.txt", "r");
            while(!feof($file)) {
                $line = fgets($file);
                echo ($line."<br>");
            }
            fclose($file);
        ?>
        <h2>File Open Set To Append</h2>
        <?php
            $file = fopen("../txt/test3.txt", "a");
            fwrite($file,"This sentence was added!\n");
            fclose($file);

            $file = fopen("../txt/test3.txt", "r");
            while(!feof($file)) {
                $line = fgets($file);
                echo ($line."<br>");
            }
            fclose($file);
        ?>
    </body>
</html>