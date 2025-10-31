<!-- Reference used to learn how to redirect in php:
    - https://www.geeksforgeeks.org/php/how-to-make-a-redirect-in-php/
-->
<html>
    <head>
        <?php
            include '../php/lab14.php';
        ?>
        <link rel="stylesheet" href="../css/lab14.css">
    </head>
    <body>
        <?php
            $myfile = "../json/usersLab14.json";
            $userNameInput = $_POST["username"];
            $userPassInput = $_POST["password"];
            $exists = verifyUser($myfile, $userNameInput, $userPassInput);
            if ($exists){ // Display the userinfo
                echo ("<h1>Welcome ".ucfirst($userNameInput)."!</h1>");
                echo ("<p>Your password is: ".$userPassInput."</p>");
                updateFile($myfile, $userNameInput);
            }
            else{ // Give a warning and return to login.html.php
                header("Location: login.html.php?error=true");
                exit();
            }
        ?>
    </body>
</html>