<!DOCTYPE html>
<html>
<body>

<?php
    $jsonobj = '{"CSC209":"Programming","CSC252":"Theory","CSC223":["Programming", "Systems"]}';
    
    var_dump(json_decode($jsonobj));
?>

</body>
</html>