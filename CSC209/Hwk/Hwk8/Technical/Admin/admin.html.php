<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/lab13.php';
        ?>
        <link rel="stylesheet" href="../css/lab13.css">
        <script src="../js/part3.js"></script>
    </head>
    <body>
        <h1>User Information</h1>
        <form>
            <input type="button" value="Log Out" onclick="adminLogOut()">
        </form> 
        <p>Instructions: Click on the headers to sort through the table in ascending and descending order</p>
        <?php
            $myfile = "../json/users.json";
            $phpArray = makeArray($myfile);
        ?>
        <script>
            let usersInfo = <?php echo json_encode($phpArray); ?>;
            makeTable(usersInfo);
        </script>
    </body>
</html>