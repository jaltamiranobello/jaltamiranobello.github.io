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
            $mainDiv = '
            <div class="mySlides">
                    <div class="numbertext">'
                        .$imgNum.' / '.$imgNR.'
                    </div>
                    <img src="'.$imgFilePaths[$i].'" style="width:100%;">
                </div>';
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