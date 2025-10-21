<html>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h2>File Looks For Files With .txt Extension</h2>
        <?php
            print_r(glob("*.txt"));
        ?>
        <h2>File Looks For Files With .php Extension</h2>
        <?php
            print_r(glob("*.php"));
        ?>
        <h2>File Looks For Files With .css Extension</h2>
        <?php
            print_r(glob("*.css"));
        ?>
    </body>
</html>