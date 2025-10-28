<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../tutorial.html">Return To Tutorials</a>
        <?php
            echo("<h1>Strings</h1>");
            echo("<h2>String Replace</h2>");
            $name = "My name is {NAME}";
            echo str_replace("{NAME}", "Fernanda", $name);
            echo "<br>";

            echo("<h2>String To Array</h2>");
            $NAMES_STR = "Fernanda,Karen,Elssie,Judith";
            $NAMES = explode(",", $NAMES_STR);
            echo("Before (String): $NAMES_STR");
            echo "<br>";
            echo ("After (Array): ");
            var_dump($NAMES);
            echo "<br>";
    
            echo("<h2>String Slicing</h2>");
            echo(substr($NAMES_STR, 9, 5));
        ?>
        <h1>Numbers</h1>
        <h2>Type Casting</h2>
        <?php
            $number1 = "500";
            echo "Before Casting: ";
            var_dump($number1);
            echo "<br>";
            echo "After Casting: ";
            $number1 = (int)$number1;
            var_dump($number1);
        ?>
        <h2>Floats</h2>
        <?php
            $number2 = 35.50;
            var_dump($number2);
            echo "<br>";
            $number3 = $number2 + 8.50;
            echo "35.50 + 8.50 = $number3";
            echo "<br>Is 35.50 + 8.50 an integer: ";
            var_dump(is_int($number3));
            echo "<br>It is a ";
            var_dump($number3);
        ?>
        <h1>Math</h1>
        <h2>Random Numbers</h2>
        <p> Refresh the page to get a different number within the range [0 - 100]</p>
        <?php
            $randNum = rand(0, 100);
            echo ($randNum);
        ?>
        <h2>Rounding</h2>
        <?php
            $num = 5.63;
            $roundNum = round($num);
            echo ("Before Rounding: $num <br>");
            echo ("After Rounding: $roundNum and the type is still ");
            var_dump($roundNum);
        ?>       
    </body>
</html>