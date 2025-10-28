<?php declare(strict_types=1);?>
<?php
    function addImages(array $imgFilePaths, int $imgNR){
        for ($i = 0; $i < $imgNR; $i++){
            $currImg = $imgFilePaths[$i];
            echo '<img src="'.$currImg.'" width="40%"></img>';
            echo "<br><br>";
        }
    }
?>