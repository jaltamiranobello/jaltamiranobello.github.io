<?php declare(strict_types=1);?>
<?php
    function addRadioButtonsFolder(array $folderPaths, int $folderNR){
        for ($i = 0; $i < $folderNR; $i++){
            $currFolder = $folderPaths[$i];
            $folderPath = substr($currFolder, 0, strlen($currFolder) - 1); //the folder path without the last '/' character
            $startIdx = strrpos($folderPath, '/') + 1; // the index of the first letter following the last '/' character
            $folderTitle = substr($folderPath, $startIdx);
            $folderTitlel = lcfirst($folderTitle);
            echo ('<input type="radio" id="'.$folderTitlel.'Opt" name="folderChoice" value="'.$folderTitlel.'">');
            echo ('<label for="'.$folderTitlel.'Opt">'.$folderTitle.'</label><br>');
        }
        echo ('<input type="submit" onclick="showFolder()"><br><br>');
    }

    function createFolderSlides($folderPaths, int $folderNR){
        $allFolderSlides = '';
        for ($i = 0; $i < $folderNR; $i++){
            $currFolder = $folderPaths[$i];
            $folderPath = substr($currFolder, 0, strlen($currFolder) - 1); //the folder path without the last '/' character
            $startIdx = strrpos($folderPath, '/') + 1; // the index of the first letter following the last '/' character
            $folderTitlel = lcfirst(substr($folderPath, $startIdx));
            $currFolderDiv = '<div class="myFolders" id='.$folderTitlel.' style="display:none;">';
            $folderImgs = glob($folderPath.'/*.jpg');
            $imgNR = count($folderImgs);
            $currFolderSlides = createSlides($folderImgs, $imgNR);
            $currFolderDots = createDots($folderImgs, $imgNR);
            $currFolderDiv = $currFolderDiv.$currFolderSlides.$currFolderDots;
            $currFolderDiv = $currFolderDiv.'</div>';
            $allFolderSlides = $allFolderSlides.$currFolderDiv;
        }
        echo ($allFolderSlides);
    }

    function createSlides(array $imgFilePaths, int $imgNR): string{
        $slideshowContainer = '
            <div class="slideshow-container">
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            ';
        for ($i = 0; $i < $imgNR; $i++){
            $imgNum = $i + 1;
            $imgFilePath = $imgFilePaths[$i];
            $startIdx = strrpos($imgFilePath, '/') + 1; // the image path starts at the index after the last '/' character
            $length = strlen($imgFilePath) - $startIdx - 4; // subtract the unnecessary characters before the file name and account for 4 for the '.jpg' in the end
            $imgCaptionText = ucfirst(substr($imgFilePath, $startIdx, $length));
            $mainDiv = '
            <div class="mySlides">
                    <div class="numbertext">'
                        .$imgNum.' / '.$imgNR.'
                    </div>
                    <img src="'.$imgFilePath.'" style="width:100%;">';
            $imgCaption = '<div class="text">'.$imgCaptionText.'</div>';
            $mainDiv = $mainDiv.$imgCaption.'</div>';
            $slideshowContainer = $slideshowContainer.$mainDiv;
        }
        $slideshowContainer = $slideshowContainer.'</div>';
        return $slideshowContainer.'<br>'; 
    }

    function createDots(array $imgFilePaths, int $imgNR): string{
        $dots = '<div class="dots" style="text-align:center">';
        for ($i = 0; $i < $imgNR; $i++){
            $imgNum = $i + 1;
            $dot = '<span class="dot" onclick="currentSlide('.$imgNum.')"></span>';
            $dots = $dots.$dot;
        }
        $dots = $dots.'</div>';
        return $dots;
    }
?>