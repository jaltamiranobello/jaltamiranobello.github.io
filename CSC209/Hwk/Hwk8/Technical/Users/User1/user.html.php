<!-- Reference used to add a value to the hidden input: 
        - https://www.w3schools.com/jsref/prop_hidden_value.asp
    Reference used to execute a function call when submit button is clicked:
        - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onsubmit_dom
-->
<html>
    <head>
        <link rel="stylesheet" href="../../css/lab14.css">
        <script src="../../js/step4.js"></script>
        <script>
            const startTime = getStartTime();
        </script>
    </head>
    <body>
        <h1>Welcome Alice!</h1>
        <?php
            include '../../php/lab14.php';
            $usersInfoFilePath = "../../json/users.json";
            $usersInfo = makeArray($usersInfoFilePath);
            $userId = extractFolderNumber("../User1");
        ?>
        <form action="../../htmlphp/logout.html.php" method="post" id="logoutForm">
            <input type="hidden" name="userId" value ="<?php echo $userId;?>">
            <input type="hidden" id="minLogged" name="minLogged" value="">
            <input type="submit" value="Log Out">
        </form>
        <script>
            document.getElementById("logoutForm").onsubmit = function() {addMinLogged(startTime)};
        </script>
    </body>
</html>