<?php declare(strict_types=1);?>
<!-- Reference used to understand stdClass object: 
        - https://www.geeksforgeeks.org/php/what-is-stdclass-in-php/
    Reference used to learn how to redirect in php:
        - https://www.geeksforgeeks.org/php/how-to-make-a-redirect-in-php/
-->
<?php
    function makeArray(string $filePath): array{
        $jsonArray = file_get_contents($filePath);
        $phpArray = json_decode($jsonArray);
        return $phpArray;
    }

    function isAdmin(array $usersInfo, string $userNameInput, string $userPassInput): bool{
        $adminFoud = false;
        $adminUser = $usersInfo[0];
        $adminPass = $adminUser->password;
        if ($userNameInput == "admin"){
            if($userPassInput == $adminPass){
                $adminFoud = true;
            }
        }
        return $adminFoud;
    }

    function verifyUser(array $usersInfo, string $usernameInput, string $userPassInput): bool{
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
    }

    function findUserId(array $usersInfo, string $userName, string $userPass): int{
        $totalUsers = count($usersInfo);
        //start at index 1 because index 0 will always be admin
        for ($i=1; $i < $totalUsers; $i++){
            $currUser = $usersInfo[$i];
            // double check password since there might be two users with the same name
            if($currUser->username == $userName){
                if($currUser->password == $userPass){
                    return $i;
                }
            }
        }
    }

    function tryLogIn(array $usersInfo, string $userNameInput, string $userPassInput, bool $admin){
        if ($admin){
            header("Location: ../Admin/admin.html.php");
            exit();
        }
        else{
            $user = verifyUser($usersInfo, $userNameInput, $userPassInput);
            if($user){
                $userId = findUserId($usersInfo, $userNameInput, $userPassInput);
                header("Location: ../Users/User".$userId."/user.html.php");
                exit();
            }
            else{
                header("Location: ../htmlPhp/login.html.php?error=true");
                exit();
            }
        }
    }

    function updateFile(array $usersInfo, int $userId, string $filePath, int $min){
        $currUser = $usersInfo[$userId];
        $currUserLog = $currUser->loggedtimes;
        $currUser->loggedtimes = $currUserLog + 1;
        $currUser->minuteslogged[] = $min;
        $myfile = fopen($filePath, "w");
        $updatedContent = json_encode($usersInfo);
        fwrite($myfile, $updatedContent);
        fclose($myfile);
    }

    function extractFolderNumber(string $folderPath): int{
        $baseName = basename($folderPath);
        $userStrIdx = strpos($baseName, "User");
        $startIdx = $userStrIdx + 4;
        $userNrString = substr($baseName, $startIdx);
        if (is_numeric($userNrString)){
            $userNr= (int)$userNrString;
        }
        return $userNr;
    }
?>