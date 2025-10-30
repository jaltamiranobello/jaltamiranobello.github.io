<?php declare(strict_types=1);?>
<!-- Reference used to understand stdClass object: https://www.geeksforgeeks.org/php/what-is-stdclass-in-php/ -->
<?php
    function makeArray(string $filePath): array{
        $jsonArray = file_get_contents($filePath);
        //create the associate array by setting the second param to true
        //$phpArray = json_decode($jsonArray, true);
        $phpArray = json_decode($jsonArray);
        //var_dump($jsonArray);
        //var_dump($phpArray);
        return $phpArray;
    }

    function makeTable(array $arrayInfo){
        $table = '
            <table>
                <tr>
                    <th onclick="sortTable(\'username\')">Username</th>
                    <th onclick="sortTable(\'password\')">Password</th>
                    <th onclick="sortTable(\'loggedtimes\')">Logged Times</th>
                </tr>';
        $totalItems = count($arrayInfo);
        for ($i=0; $i < $totalItems; $i++){
            $currArray = $arrayInfo[$i];
            //var_dump($currArray);
            //access with an assosiative array
            // $currUserName = $currArray["username"];
            // $currPassword = $currArray["password"];
            // $currLogTimes = $currArray["loggedtimes"];
            $currUserName = $currArray.username;
            $currPassword = $currArray.password;
            $currLogTimes = $currArray.loggedtimes;
            $currRow = "
                <tr>
                    <td>".$currUserName."</td>
                    <td>".$currPassword."</td>
                    <td>".$currLogTimes."</td>
                </tr>";
            $table = $table.$currRow;
        }
        $table = $table."</table>";
        echo $table;
    }
?>