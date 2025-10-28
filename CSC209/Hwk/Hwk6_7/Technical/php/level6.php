<?php declare(strict_types=1);?>
<?php
    function createSlides(array $imgFilePaths, int $imgNR){
        $slideshowContainer = '
            <div class="slideshow-container">
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            ';
        for ($i = 0; $i < $imgNR; $i++){
            $imgNum = $i + 1;
            $imgFilePath = $imgFilePaths[$i];
            $startIdx = strrpos($imgFilePath, '/') + 1; // the name of the file starts after the position of the last '/' character
            $length = strlen($imgFilePath) - $startIdx - 4; // subtract the unnecessary characters before the file name and account for 4 for the '.jpg' in the end
            $imgTitle = substr($imgFilePath, $startIdx, $length);
            $imgCaptionText = ucfirst($imgTitle);
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
        echo ($slideshowContainer.'<br>');
    }

    function createDots(array $imgFilePaths, int $imgNR){
        $dots = '<div id="dots" style="text-align:center">';
        for ($i = 0; $i < $imgNR; $i++){
            $imgNum = $i + 1;
            $dot = '<span class="dot" onclick="currentSlide('.$imgNum.')"></span>';
            $dots = $dots.$dot;
        }
        $dots = $dots.'</div>';
        echo ($dots);
    }
?>