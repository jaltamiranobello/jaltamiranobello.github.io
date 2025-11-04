<!DOCTYPE html>
<html>
<body>

<?php
    $courses = array("CSC209"=>"Programming", "CSC252"=>"Theory", "CSC223"=>array("Programming", "Systems"));

    echo (json_encode($courses));
?>

</body>
</html>