function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let currentFolder = document.querySelector('input[name="folderChoice"]:checked').value;
  let folderDiv = document.getElementById(currentFolder);
  let folderSlidesContainer = folderDiv.getElementsByClassName("slideshow-container")[0];
  let slides = folderSlidesContainer.getElementsByClassName('mySlides');
  let dotsDiv = folderDiv.getElementsByClassName("dots")[0];
  let dots = dotsDiv.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showFolder(){
    let folderChoice = document.querySelector('input[name="folderChoice"]:checked').value;
    let allFolders = document.getElementsByClassName('myFolders');
    let folderNR = allFolders.length;
    for (let i = 0; i < folderNR; i++){
      let currFolder = allFolders[i];
      if (currFolder.id != folderChoice){
        currFolder.style.display = "none";
      }
      else{
        currFolder.style.display = "block";
      }
    }
    slideIndex = 1;
    showSlides(slideIndex);
}