function createPoints(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //first circle
    ctx.beginPath();
    ctx.strokeStyle = "#8FB381";
    ctx.arc(475, 80, 20, 0, 2 * Math.PI)
    ctx.lineWidth = 5;
    ctx.stroke();
    //speed: slow (25 increment/decrement)
    // direction: diagonal down left
    ctx.beginPath();
    ctx.moveTo(475, 80);
    ctx.lineTo(450, 105);
    ctx.stroke();

    //second circle
    ctx.beginPath();
    ctx.strokeStyle = "#F7F2A3";
    ctx.arc(400, 400, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: medium (55 increment/decrement)
    // direction: left
    ctx.beginPath();
    ctx.moveTo(400, 400);
    ctx.lineTo(345, 400);
    ctx.stroke();

    //third circle
    ctx.beginPath();
    ctx.strokeStyle = "#D47F97";
    ctx.arc(50, 300, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //speed: fast (85 increment/decrement)
    // direction: diagonal up right
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(135, 215);
    ctx.stroke();
}