<html>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <h2>File Set To Write in Existing File</h2>
        <?php
            $file = fopen("../txt/test3.txt","w");
            fwrite($file,"Hello, Existing File. I overwrote you!");
            fclose($file);

            $file = fopen("../txt/test3.txt","r");
            $bytesData = fread($file,"50");
            fclose($file);
            echo $bytesData;
        ?>
        <h2>File Set To Write in Non-Existing File</h2>
        <?php
            $file = fopen("test.txt","w");
            fwrite($file,"Hello, New File!");
            fclose($file);

            $file = fopen("test.txt","r");
            $bytesData = fread($file,"20");
            fclose($file);
            echo $bytesData;
        ?>
    </body>
</html>