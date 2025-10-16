function addRow(optPt1, optPt2, name){
    let newRow = "";
    newRow += ROW.replace("CHECKCROSS1", optPt1);
    newRow = newRow.replace("CHECKCROSS2", optPt2);
    newRow = newRow.replace("NAME", name);
    let table = document.getElementById("compTable");
    table.innerHTML += newRow;
}

function addRows(){
  //Assuming the part 1 and part 2 column values should vary randomly per row created
  for (let i = 0; i < NROWS; i++){
    let pt1Idx = Math.floor(Math.random() * 2);
    let pt2Idx = Math.floor(Math.random() * 2);
    addRow(PART1[pt1Idx], PART2[pt2Idx], NAMES[i]);
  }
}