<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" href="../css/userPage.css">
        <script src="../js/userFunctions.js"></script>
        <script>
            const startTime = getStartTime();
        </script>
    </head>
    <body>
        <h1>Welcome <?php echo (ucfirst($_SESSION["username"]))?>!</h1>
        <form action="../php/logout.php" method="post" id="logoutForm">
            <input type="hidden" id="minLogged" name="minLogged" value="">
            <input type="submit" value="Log Out">
        </form>
        <script>
            document.getElementById("logoutForm").onsubmit = function() {addMinLogged(startTime)};
        </script>
    </body>
</html>