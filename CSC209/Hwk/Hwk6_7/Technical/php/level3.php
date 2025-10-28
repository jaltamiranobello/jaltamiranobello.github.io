<?php declare(strict_types=1);?>
<?php
    function addRadioButtons(array $imgFilePaths, int $imgNR){
        for ($i = 0; $i < $imgNR; $i++){
            $currImg = $imgFilePaths[$i];
            $startIdx = strrpos($currImg, '/') + 1; // the name of the file starts after the position of the last '/' character
            $length = strlen($currImg) - $startIdx - 4; // subtract the unnecessary characters before the file name and account for 4 for the '.jpg' in the end
            $imgTitle = substr($currImg, $startIdx, $length);
            $imgTitleU = ucfirst($imgTitle);
            echo ('<input type="radio" id="'.$imgTitle.'Opt" name="imageChoice" value="'.$imgTitle.'">');
            echo ('<label for="'.$imgTitle.'Opt">'.$imgTitleU.'</label><br>');
        }
        echo ('<input type="submit" onclick="showImage()"><br><br>');
    }

    function addImages(array $imgFilePaths, int $imgNR){
        for ($i = 0; $i < $imgNR; $i++){
            $currImg = $imgFilePaths[$i];
            $startIdx = strrpos($currImg, '/') + 1; // the name of the file starts after the position of the last '/' character
            $length = strlen($currImg) - $startIdx - 4; // subtract the unnecessary characters before the file name and account for 4 for the '.jpg' in the end
            $idName = substr($currImg, $startIdx, $length);
            echo '<img src="'.$currImg.'" width="40%" style="display:none;" id='.$idName.'></img>';
            echo "<br><br>";
        }
    }
?>