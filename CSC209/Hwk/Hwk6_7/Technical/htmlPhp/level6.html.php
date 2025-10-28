<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../css/level4.css">
    <?php
        include '../php/level6.php';
        $imageFileNames = glob("../Images/Space/*.jpg");
        $imagesNr = count($imageFileNames);
    ?>
    <script>
        let slideIndex = 1;
    </script>
    <script src="../js/level4.js"></script>
</head>
<body>
    <a href="../technical.html">Return To Technical</a>
    <?php
        createSlides($imageFileNames, $imagesNr);
        createDots($imageFileNames, $imagesNr);
    ?>
    <script>
            showSlides(slideIndex);
    </script>
</body>
</html>