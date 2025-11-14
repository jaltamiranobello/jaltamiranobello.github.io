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
                echo '<div class="error-message-box"> <button class="error-close-button" type="button" onclick="openLogInPage()">&#10006</button> <p id="login-failed">Error: Invalid username or password!<p></div>';
            }
            if (isset($_GET['register'])){ //if the url parameter error is set
                if($_GET['register'] == "error"){
                    echo '<div class="error-message-box"> <button class="error-close-button" type="button" onclick="openLogInPage()">&#10006</button> <p>Error: Username already exists!<p></div>';
                }
                else{//the param is set to success
                    echo '<div class="error-message-box"> <button class="error-close-button" type="button" onclick="openLogInPage()">&#10006</button> <p>Success: Account was created, you may now log-in!<p></div>';
                }
            }
        ?>
        <button id="register-button" onclick="showRegisterForm()">Register</button>
        <form id="login-form" action="../php/verify.php" method="post">
            Username: <input class="login-input" type="text" name="username" required><br><br>
            Password: <input class="login-input" type="password" name="password" required><br><br>
            <input id="login-submit" type="submit">
        </form>
        <div id="register-form" class="modal">
            <form class="modal-content animate" action="../php/registerUser.php" method="post">
                <div id="register-close-button-container">
                    <button onclick="exitRegisterForm()" class="close" title="Close Modal">&times;</button>
                </div>
                <div class="register-input-container">
                    <label for="newUsername"><b>Username</b></label>
                    <input id="register-user" type="text" placeholder="Enter Username" name="newUsername" required>

                    <label for="newPassword"><b>Password</b></label>
                    <input id="register-pass" type="password" placeholder="Enter Password" name="newPassword" required>
                        
                    <button id="submit-register-button" type="submit">Register</button>
                </div>
            </form>
        </div>
    </body>
</html>