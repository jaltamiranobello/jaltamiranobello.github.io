<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../css/loginPage.css">
        <script src="../js/userFunctions.js"></script>
    </head>
    <body>
        <h1>Login Page</h1>
        <?php
            if (isset($_GET['logIn'])){ //if the url parameter error is set
                echo '<div class="error-message-box"> <button class="close-button" type="button" onclick="openLogInPage()">&#10006</button> <p id="login-failed">Error: Invalid username or password!<p></div>';
            }
        ?>
        <form id="login-form" action="../php/verify.php" method="post">
            Username: <input class="login-input" type="text" name="username" required><br><br>
            Password: <input class="login-input" type="text" name="password" required><br><br>
            <input id="login-submit" type="submit">
        </form> 
    </body>
</html>