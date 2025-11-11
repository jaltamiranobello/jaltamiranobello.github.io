<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <script src="../js/t1.js"></script>
</head>
<body>
<a href="../tutorial.html">Return To Tutorials</a><br><br>
<?php
// Set session variables
$_SESSION["name"] = "Fernanda";
$_SESSION["age"] = "21";
echo "<button onclick='showSessions()'>Click me to view session values!</button>";
?>

</body>
</html>