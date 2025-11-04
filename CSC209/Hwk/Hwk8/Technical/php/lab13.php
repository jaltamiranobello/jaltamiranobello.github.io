<?php declare(strict_types=1);?>
<!-- Reference used to understand stdClass object: https://www.geeksforgeeks.org/php/what-is-stdclass-in-php/ -->
<?php
    function makeArray(string $filePath): array{
        $jsonArray = file_get_contents($filePath);
        $phpArray = json_decode($jsonArray);
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