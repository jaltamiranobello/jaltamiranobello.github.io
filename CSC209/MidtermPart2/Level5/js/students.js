function addRow(optPt1, optPt2, name){
  let newRow = document.createElement("tr");
  let col1 = document.createElement('td');
  let nameTxt = document.createTextNode(name);
  col1.appendChild(nameTxt);
  newRow.appendChild(col1);
  let col2 = document.createElement('td');
  let icon1 = document.createElement('i');
  icon1.setAttribute("class", optPt1);
  col2.appendChild(icon1);
  newRow.appendChild(col2);
  let col3 = document.createElement('td');
  let icon2 = document.createElement('i');
  icon2.setAttribute("class", optPt2);
  col3.appendChild(icon2);
  newRow.appendChild(col3);
  let table = document.getElementById('compTable');
  table.appendChild(newRow);
}

function addRows(){
  //Assuming the part 1 and part 2 column values should vary randomly per row created
  for (let i = 0; i < NROWS; i++){
    let pt1Idx = Math.floor(Math.random() * 2);
    let pt2Idx = Math.floor(Math.random() * 2);
    addRow(PART1[pt1Idx], PART2[pt2Idx], NAMES[i]);
  }
}