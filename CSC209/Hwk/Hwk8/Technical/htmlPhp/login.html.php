<!-- Resources used to undertand how to add url parameters to make an error message:
    - https://www.reddit.com/r/PHPhelp/comments/xiyav3/redirect_with_error_message/
    - https://stackoverflow.com/questions/15635090/passing-error-messages-in-php
-->
<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/lab14.php';
        ?>
        <link rel="stylesheet" href="../css/lab14.css">
    </head>
    <body>
        <h1>Login Page</h1>
        <?php
            if (isset($_GET['error'])){ //if the url parameter error is set
                echo '<p id="login-failed">Error: Invalid username or password!<p>';
            }
        ?>
        <form action="../php/verify.php" method="post">
            Username: <input type="text" name="username"><br><br>
            Password: <input type="text" name="password"><br><br>
            <input type="submit">
        </form>
        <script>
        </script>  
    </body>
</html>