<html>
    <head>
        <?php
            $currFolder = realpath("../Lab11");
            //echo ($currFolder."<br><br>");
            $baseName = basename($currFolder);
            //echo ($baseName."<br>");
            $labNrString = substr("$baseName",-2);
            //echo ($labNrString);
            if (is_numeric($labNrString)){
                $labNr= (int)$labNrString;
                echo ("<p>My lab number is $labNr</p>");
            }
            //var_dump($labNr);


            //$filePath = realpath("whereami.html.php");
            //echo($filePath."<br><br>");
            //echo dirname($filePath)."<br><br>";
            //$hardCodedPath = "Lab11/whereami.html.php";
            //echo dirname($hardCodedPath)."<br>";
        ?>
    </head>
    <body>
        <p>This page figures out its whereabouts</p>
    </body>
</html>