function addImages(){
    let newImg, imgPath;
    let spacing1, spacing2;
    //Format using glob() contains only .jpg files
    for (let i = 0; i < IMAGES.length; i++){
        imgPath = IMAGES[i];
        newImg = document.createElement('img');
        newImg.setAttribute("src", imgPath);
        newImg.setAttribute("width", "40%");
        document.body.appendChild(newImg);
        spacing1 = document.createElement('br');
        spacing2 = document.createElement('br');
        document.body.appendChild(spacing1);
        document.body.appendChild(spacing2);
    }
}