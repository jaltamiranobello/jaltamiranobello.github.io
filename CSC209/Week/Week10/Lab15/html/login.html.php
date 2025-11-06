<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../css/loginPage.css">
    </head>
    <body>
        <h1>Login Page</h1>
        <?php
            if (isset($_GET['error'])){ //if the url parameter error is set
                echo '<p id="login-failed">Error: Invalid username or password!<p>';
            }
        ?>
        <form action="../php/verify.php" method="post">
            Username: <input type="text" name="username" required><br><br>
            Password: <input type="text" name="password" required><br><br>
            <input type="submit">
        </form> 
    </body>
</html>