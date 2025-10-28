function showImage(){
    let imageChoice = document.querySelector('input[name="imageChoice"]:checked').value;
    let allImgs = document.getElementsByTagName('img');
    let imgNR = allImgs.length;
    for (let i = 0; i < imgNR; i++){
        let currImg = allImgs[i];
        if (currImg.id != imageChoice){
            currImg.style.display = "none";
        }
        else{
            currImg.style.display = "inline-block";
        }
    }
}