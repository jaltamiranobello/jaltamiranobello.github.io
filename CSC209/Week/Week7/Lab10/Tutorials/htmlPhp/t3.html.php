<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>Loops</h1>
        <h2>For Loop</h2>
        <?php
            $names = array("Fernanda", "Karen", "Elssie", "Judith");
            $names_len = count($names);
            for ($x = 0; $x < $names_len; $x++) {
                echo 'At index ' .$x. ' the value is ' .$names[$x].' <br>';
            }
        ?>
        <h2>While Loop</h2>
        <?php
            $myName = "Fernanda";
            $apples = 4;
            while ($apples <= 25) {
                $apples+=2;
                echo ($myName. ' has ' .$apples. " apples!<br>");
            }
        ?>
        <h2>For Each Loop</h2>
        <h3>Finding Array Values</h3>
        <?php
            foreach ($names as $name) {
                echo "$name <br>";
            }
        ?>
        <h3>Changing Array Values</h3>
        <?php
            echo ("Before: ");
            var_dump($names);
            echo "<br>";
            foreach ($names as &$name) {
            if ($name == "Elssie"){
                $name = "Taylor";
            }
            }
            echo('After: ');
            var_dump($names);
        ?>      
    </body>
</html>