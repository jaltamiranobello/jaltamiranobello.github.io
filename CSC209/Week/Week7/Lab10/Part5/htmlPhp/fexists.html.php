<html>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h2>File Does Not Exist:</h2>
        <?php
            $file = "fakeFile.txt";
            if (file_exists($file)) {
                echo "The file '$file' exists.";
            } else {
                echo "The file '$file' does not exist.";
            }
        ?>
        <h2>File Does Exist:</h2>
        <?php
            $file = "../txt/test3.txt";
            if (file_exists($file)) {
                echo "The file '$file' exists.";
            } else {
                echo "The file '$file' does not exist.";
            }
        ?>
    </body>
</html>