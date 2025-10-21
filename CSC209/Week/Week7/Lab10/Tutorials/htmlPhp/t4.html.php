<?php declare(strict_types=1);?>
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <a href="../../lab10.html">Return To Lab 10</a>
        <h1>Functions</h1>
        <h2>Strict Types, Return Values, and Arguments</h2>
        <p>This function combines two strings in an array by randomly generating indexes and ensures the data types of the inputs and output value before executing the function.</p>
        <p>Referesh the page to get a different name combination</p>
        <?php
            function combineName(array $names, int $idx): string {
                $rand_idx = random_int(0, count($names) - 1);
                return $names[$idx].$names[$rand_idx];
            }
            $myNames = array("Fernanda", "Karen", "Elssie", "Judith", "Taylor", "Liz", "Aster", "Ella", "Yazmin", "Danna", "Aileen");
            $myIdx = random_int(0, count($myNames) - 1);;
            echo combineName($myNames, $myIdx);
        ?>      
    </body>
</html>