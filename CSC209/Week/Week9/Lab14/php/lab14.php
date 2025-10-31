<?php declare(strict_types=1);?>
<!-- Reference used to understand stdClass object: https://www.geeksforgeeks.org/php/what-is-stdclass-in-php/ -->
<?php
    function makeArray(string $filePath): array{
        $jsonArray = file_get_contents($filePath);
        $phpArray = json_decode($jsonArray);
        return $phpArray;
    }

    function verifyUser(string $filePath, string $usernameInput, string $userPassInput): bool{
        $usersInfo = makeArray($filePath);
        for ($i=0; $i < count($usersInfo); $i++){
            $currUser = $usersInfo[$i];
            //var_dump($currUser);
            $currUserName = $currUser->username;
            $currUserPass = $currUser->password;
            // the username exists
            if ($currUserName == $usernameInput){
                // the password is correct for the username
                if ($currUserPass == $userPassInput){
                    $found = true;
                    break;
                }
                else{// the user exists but the password is false
                    $found = false;
                }
            }
            else{
                $found = false;
            }
        }
        return $found;
        //echo ("Welcome ".$usernameInput); 
    }

    function updateFile(string $filePath, string $userName){
        $usersInfo = makeArray($filePath);
        for ($i=0; $i < count($usersInfo); $i++){
            $currUser = $usersInfo[$i];
            $currUserName = $currUser->username;
            // this is the user that logged in
            if ($currUserName == $userName){
                $currUserLog = $currUser->loggedtimes;
                $currUser->loggedtimes = $currUserLog + 1;
                break;
            }
        }
        $myfile = fopen($filePath, "w");
        $updatedContent = json_encode($usersInfo);
        fwrite($myfile, $updatedContent);
        fclose($myfile);
    }
?>