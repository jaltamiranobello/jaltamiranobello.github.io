<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>Arrays</h1>
        <h2>Indexed Arrays</h2>
        <?php
            $names = array("Fernanda", "Karen", "Elssie", "Judith", "Taylor", "Liz", "Aster", "Ella", "Yazmin", "Danna", "Aileen");
            echo "The original array: ";
            var_dump($names);
            echo "<br>";
            echo "<p>The fourth name in the array is $names[3].</p>";
            array_push($names, "Alex");
            echo "The array after using the array_push method: ";
            var_dump($names);
        ?>
        <h2>Associative Arrays (Key/Value Pairs)</h2>
        <?php
            $aboutMe = array("Name"=>"Fernanda", "Age"=>20, "Major"=>"Computer Science", "Home"=>"Arizona", "Zodiac"=>"Scorpio");
            foreach ($aboutMe as $key => $value) {
            echo "$key: $value <br>";
            }
        ?>      
    </body>
</html>