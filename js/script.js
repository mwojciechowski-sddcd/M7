// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');
const empCountOutput = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const ext = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.getElementsByTagName('tbody')[0].insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm text-light';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    empCountOutput.value = `(${employeeCount})`;
});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentElement.parentElement.rowIndex;
            employeeTable.deleteRow(rowIndex);
            employeeCount--;
            empCountOutput.value = `(${employeeCount})`;
        }
    }
});
