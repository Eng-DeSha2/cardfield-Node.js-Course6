console.log("script loaded")


document.addEventListener("DOMContentLoaded", function () {

    event.preventDefault(); 

    const addButton = document.getElementById("my-button");
    const dataTable = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    const nameField = document.getElementById("name-field");
    const emailField = document.getElementById("email-field");
    const passwordField = document.getElementById("password-field");

  


    addButton.addEventListener("click", function () {
        const nameValue = nameField.value;
        const emailValue = emailField.value;
        const passwordValue = passwordField.value;

        if (nameValue) {
            const newRow = dataTable.insertRow();

            const nameCell = newRow.insertCell(0);
            const emailCell = newRow.insertCell(1);
            const passwordCell = newRow.insertCell(2);
            const actionCell = newRow.insertCell(3);

            nameCell.textContent = nameValue;
            emailCell.textContent = emailValue;
            passwordCell.textContent = passwordValue;

            actionCell.innerHTML = '<button class="delete-button">Delete</button>';

            nameField.value = ""; // Clear 
            emailField.value = ""; 
            passwordField.value = ""; 

            attachDeleteHandler(newRow);
        }
    });

    function attachDeleteHandler(row) {
        const deleteButton = row.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            dataTable.deleteRow(row.rowIndex -1);
        });
    }
});