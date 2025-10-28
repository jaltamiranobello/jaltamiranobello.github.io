<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/creative.css">
    <?php
        include '../php/creative.php';
        $folderNames = glob("../Images/*/");
        $folderNr = count($folderNames);
    ?>
    <script>
        let slideIndex = 1;
    </script>
    <script src="../js/creative.js"></script>
</head>
<body>
    <h1>Creative</h1>
    <a href="../../hwk6_7.html">Back to Homework 6/7</a>
    <p>Select a folder to display:</p>
    <?php
        addRadioButtonsFolder($folderNames, $folderNr);
        createFolderSlides($folderNames, $folderNr);
    ?>
</body>
</html>