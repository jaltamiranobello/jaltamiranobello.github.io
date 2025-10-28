function addImages(){
    let currImg, imgPath;
    let spacing1, spacing2;
    //Format using scandir() has extra default files such as "." and ".."
    for (let i = 0; i < IMAGES.length; i++){
        // only create the image if the file is of type .jpg
        imgPath = IMAGES[i]; 
        if (imgPath.includes(".jpg")){
            currImg = document.createElement('img');
            currImg.setAttribute("src", "../Images/Space/" + imgPath);
            currImg.setAttribute("width", "40%");
            document.body.appendChild(currImg);
            spacing1 = document.createElement('br');
            spacing2 = document.createElement('br');
            document.body.appendChild(spacing1);
            document.body.appendChild(spacing2);
        }
        //otherwise do nothing with the file path
    }
}