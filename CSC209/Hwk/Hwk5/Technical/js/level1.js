function createPoint(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(475, 80, 20, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke();
     
    //speed: slow (25 increment/decrement)
    // direction: diagonal down left
    ctx.beginPath();
    ctx.moveTo(475, 80);
    ctx.lineTo(450, 105);
    ctx.stroke();
}