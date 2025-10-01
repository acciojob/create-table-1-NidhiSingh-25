function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

    // Find how many rows are already there
    let rowCount = table.rows.length;

    // Insert a new row at the end
    let newRow = table.insertRow();

    // Insert two new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set text using the row count + 1 (for next row number)
    cell1.innerHTML = "Row" + (rowCount + 1) + " cell1";
    cell2.innerHTML = "Row" + (rowCount + 1) + " cell2";
}
