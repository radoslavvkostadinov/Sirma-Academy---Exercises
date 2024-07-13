function createTable() {

    // Choose number of rows and cols
    let row = 1;
    let col = 1;
    const table = document.getElementById('myTable');

    if (row <= 0 || col <= 0) alert('Row and column indices must be non-negative and bigger than 0.');
    let i = 1;
    for (i = 1; i <= row; i++) {
        const tableRow = document.createElement('tr');
        for (let j = 1; j <= col; j++) {
            const tableData = document.createElement('td');
            tableData.textContent = `Row ${i} Cell ${j}`
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }
}
