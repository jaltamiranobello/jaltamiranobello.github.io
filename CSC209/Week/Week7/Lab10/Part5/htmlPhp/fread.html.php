<html>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h2>File Set To Read 5 bytes</h2>
        <?php
            $file = fopen("../txt/test1.txt","r");
            $bytesData = fread($file,"5");
            fclose($file);
            echo $bytesData;
        ?>
        <h2>File Set To Read 15 bytes</h2>
        <?php
            $file = fopen("../txt/test1.txt","r");
            $bytesData = fread($file,"15");
            fclose($file);
            echo $bytesData;
        ?>
        <h2>File Set To Read 23 bytes</h2>
        <?php
            $file = fopen("../txt/test1.txt","r");
            $bytesData = fread($file,"23");
            fclose($file);
            echo $bytesData;
        ?>
        <h2>File Set To Read 250 bytes</h2>
        <?php
            $file = fopen("../txt/test1.txt","r");
            $bytesData = fread($file,"250");
            fclose($file);
            echo $bytesData;
        ?>
    </body>
</html>