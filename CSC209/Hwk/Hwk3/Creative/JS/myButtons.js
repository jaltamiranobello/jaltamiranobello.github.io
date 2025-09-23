function changeMenu(){
    let menubar = document.getElementById("menuLinks");
    let menuStyle = getComputedStyle(menubar);
    if (menuStyle.flexDirection == "row"){
        menubar.style.flexDirection = "column";
    }
    else{
        menubar.style.flexDirection = "row";
    }
}

function showImages(){
    let image = document.getElementById("photo2");
    let imageStyle = getComputedStyle(image);
    let button = document.getElementById('showImage1');
    if (imageStyle.display == "none"){
        image.style.display = "block";
        button.innerText = "Hide Image";
    }
    else{
        image.style.display = "none";
        button.innerText = "Show Image";
    }
}

function showInstructions(){
    let instru = document.getElementById("instructions");
    let imageStyle = getComputedStyle(instru);
    let button = document.getElementById('showInstru');
    if (imageStyle.display == "none"){
        instru.style.display = "block";
        button.innerText = "Hide Instructions";
    }
    else{
        instru.style.display = "none";
        button.innerText = "Show Instructions";
    }
}

function showRatings(){
    let reviews = document.getElementById('ratings');
    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let reviewsStyle = getComputedStyle(reviews);
    let button = document.getElementById('showReviews');
    if (reviewsStyle.display == "none"){
        reviews.style.display = "block";
        button.innerText = "Hide Reviews";
        line1.style.display = "block";
        line2.style.display = "block";

    }
    else{
        reviews.style.display = "none";
        button.innerText = "Show Reviews";
        line1.style.display = "none";
        line2.style.display = "none";
    }
}

function flipStyle(){
    if (document.getElementById("style-option").getAttribute('href') == "CSS/style1.css"){
        document.getElementById("style-option").href = "CSS/style2.css";
    }
    else{
        document.getElementById("style-option").href = "CSS/style1.css";
    }
}