function addRow(optPt1, optPt2, name){
    let newRow = "";
    newRow += ROW.replace("CHECKCROSS1", optPt1);
    newRow = newRow.replace("CHECKCROSS2", optPt2);
    newRow = newRow.replace("NAME", name);
    let table = document.getElementById("compTable");
    table.innerHTML += newRow;
}