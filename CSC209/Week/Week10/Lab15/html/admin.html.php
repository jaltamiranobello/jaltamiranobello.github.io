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
        <input type="button" value="Log Out" onclick="adminLogOut()">
        <button type="button" onclick="refreshTable()">Refresh</button>
        <p>Instructions: Click on the headers to sort through the table in ascending and descending order</p>
        <?php
            $myfile = "../json/users.json";
            $phpArray = createPhpArray($myfile);
        ?>
        <script>
            let usersInfo = <?php echo json_encode($phpArray); ?>;
            makeTable(usersInfo);
            function refreshTable() {
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    table = document.getElementById("usersTable");
                    table.remove();
                    usersInfo = JSON.parse(this.responseText);
                    console.log(usersInfo);
                    makeTable(usersInfo);
                }
                xhttp.open("GET", "../php/getData.php");
                xhttp.send();
            }
        </script>
    </body>
</html>