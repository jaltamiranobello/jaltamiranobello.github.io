<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" href="../css/userPage.css">
        <script src="../js/userFunctions.js"></script>
        <script src="../js/slideshow.js"></script>
        <script>
            const startTime = getStartTime(); // to be used in userFunctions.js
            let slideIndex = 1; // to be used in slideshow.js
        </script>
        <?php
            include '../php/slideshow.php';
            $images = glob("../Users/".$_SESSION["username"]."/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF}", GLOB_BRACE);
            $imagesNr = count($images);
        ?>
    </head>
    <body>
        <h1>Welcome <?php echo (ucfirst($_SESSION["username"]))?>!</h1>
        <form action="../php/logout.php" method="post" id="logoutForm">
            <input type="hidden" id="minLogged" name="minLogged" value="">
            <input id="logout-button" type="submit" value="Log Out">
        </form>
        <button id="refresh-button" type="button" onclick="refresh()">Refresh</button>
        <script>
            document.getElementById("logoutForm").onsubmit = function() {addMinLogged(startTime)};
        </script>
        <form id="image-upload-form" action="../php/upload.php" method="post" enctype="multipart/form-data">
            Select image to upload: 
            <input id="image-file-button" type="file" name="imgFile" required><br><br>
            <input id="image-file-submit" type="submit" value="Upload Image" name="submit">
        </form>
        <?php
            if (isset($_GET['fileUpload'])){ //if the url parameter error is set
                $errorID = $_GET['fileUpload'];
                if($errorID == 1){
                    echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="refresh()">&#10006</button> <p class="error-message">Error: File is not an image, upload another file.</p></div>';
                }
                else if($errorID == 2){
                    echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="refresh()">&#10006</button> <p class="error-message">Error: File already exits, upload another file.</p></div>';
                }
                else if($errorID == 3){
                    echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="refresh()">&#10006</button> <p class="error-message">Error: File is too large, upload another file.</p></div>';
                }
                else if($errorID == 4){
                    echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="refresh()">&#10006</button> <p class="error-message">Error: Sorry only JPG, JPEG, PNG, & GIF files are accepted. Please upload another file.</p></div>';
                }
                else{
                    echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="refresh()">&#10006</button> <p class="error-message">Error: File cannnot be uploaded.</p></div>';
                }
            }
            createSlides($images, $imagesNr);
            createDots($images, $imagesNr);
        ?>
        <script>
                showSlides(slideIndex);
        </script>
    </body>
</html>