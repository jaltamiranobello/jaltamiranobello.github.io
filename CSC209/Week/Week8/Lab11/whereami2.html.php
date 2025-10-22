<html>
    <head>
        <?php
            function extractFolderNumber(string $folderPath):int {
                $baseName = basename($folderPath);
                $labNrString = substr("$baseName",-2);
                if (is_numeric($labNrString)){
                    $labNr= (int)$labNrString;
                }
                return $labNr;
            }
            // $currFolder = realpath("../Lab11");
            // $labNr = extractFolderNumber($currFolder);
            // echo ("<p>My lab number is $labNr</p>");
        ?>
    </head>
    <body>
    </body>
</html>