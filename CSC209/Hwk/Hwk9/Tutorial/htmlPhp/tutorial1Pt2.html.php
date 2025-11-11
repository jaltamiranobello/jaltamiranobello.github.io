<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
<a href="../tutorial.html">Return To Tutorials</a><br><br>
<?php
print_r($_SESSION);
session_unset();
session_destroy();
?>

</body>
</html>