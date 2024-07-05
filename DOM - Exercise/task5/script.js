function insertRow() {

    const table = document.getElementById('sampleTable').children[0];
    let tbodyLength = table.children.length;

    const row = document.createElement('tr');
    const firstCol = document.createElement('td');
    const secondCol = document.createElement('td');
    firstCol.innerHTML = `Row${tbodyLength + 1} cell1`
    secondCol.innerHTML = `Row${tbodyLength + 1} cell2`

    row.appendChild(firstCol);
    row.appendChild(secondCol);
    table.appendChild(row);

}