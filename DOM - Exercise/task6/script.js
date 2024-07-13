function changeContent(row,col,text) {

    // Choose row, col and text
    row = 1;
    col = 1;
    text = 'Pesho'; 

    const table = document.getElementById('myTable');
    const selectedRow = table.querySelector(`tr:nth-of-type(${row})`);
    const selectedCol = selectedRow.querySelector(`td:nth-of-type(${col})`);

    if (!selectedRow || !selectedCol) {
        alert('Row or column does not exist!');
    }

    selectedCol.textContent = text; 
}