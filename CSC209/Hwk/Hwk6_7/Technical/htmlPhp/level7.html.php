<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/level4.css">
    <?php
        include '../php/level7.php';
        $folderNames = glob("../Images/*/");
        $folderNr = count($folderNames);
    ?>
    <script>
        let slideIndex = 1;
    </script>
    <script src="../js/level7.js"></script>
</head>
<body>
    <a href="../technical.html">Return To Technical</a>
    <p>Select a folder to display:</p>
    <?php
        addRadioButtonsFolder($folderNames, $folderNr);
        createFolderSlides($folderNames, $folderNr);
    ?>
</body>
</html>