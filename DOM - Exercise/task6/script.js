function changeContent(row,col,text) {

    row = 1;
    col = 1;
    text = 'Pesho'; 

    // First more dummy variant and indexes started from 0 !
    // const selectedRow = document.getElementById('myTable').children[0].children[row];
    // const selectedCol = selectedRow.children[col];

    // if (!selectedRow || !selectedCol) {
    //     alert('Row or column does not exist!');
    // }
    // selectedCol.textContent = text;

    // Second more concise and readable variant
    const table = document.getElementById('myTable');
    const selectedRow = table.querySelector(`tr:nth-of-type(${row})`);
    const selectedCol = selectedRow.querySelector(`td:nth-of-type(${col})`);

    if (!selectedRow || !selectedCol) {
        alert('Row or column does not exist!');
    }

    selectedCol.textContent = text; 
}