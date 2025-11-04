<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../css/lab14.css">
        <script src="../js/step4.js"></script>
    </head>
    <body>
        <?php
            include '../php/lab14.php';
            $filePath = "../json/users.json";
            $usersInfo = makeArray($filePath);
            $userId = $_POST["userId"];
            $minLogged = $_POST["minLogged"];
            updateFile($usersInfo, $userId, $filePath, $minLogged);
        ?>
        <h1>Goodbye <?php echo (ucfirst($usersInfo[$userId]->username));?>!</h1>
        <form>
            <input type="button" value="Return To Log In Page" onclick="openLogInPage()">
        </form>
    </body>
</html>