<!DOCTYPE html>
<html>
    <head>
        <?php
            include '../php/library.php';
        ?>
        <link rel="stylesheet" href="../css/adminPage.css">
        <script src="../js/adminFunctions.js"></script>
    </head>
    <body>
        <h1>User Information</h1>
        <input id="logout-button" type="button" value="Log Out" onclick="adminLogOut()">
        <button id="refresh-button" type="button" onclick="refreshTable()">Refresh</button>
        <p>Instructions: Click on the headers to sort through the table in ascending and descending order</p>
        <?php
            $myfile = "../json/users.json";
            $dataArray = createPhpArray($myfile);
        ?>
        <script>
            let usersData = <?php echo json_encode($dataArray); ?>;
            makeTable();
        </script>
    </body>
</html>