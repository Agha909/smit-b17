function addItems() {
    let todoText = document.getElementById("todoText");
    if (todoText.value.trim() === "") {
        Swal.fire("Please Enter a Value!");
        return;
    } else {
        let todoList = document.getElementById("todoList");

        let todoItem = `
            <li class="todoItems">
                ${todoText.value} 
                <span class="delete-icon" onclick="deleteSingleItem(event)">❌</span>
            </li>
        `;

        todoList.innerHTML += todoItem;
        todoText.value = "";
    }
}

function deleteSingleItem(event) {
    event.target.parentElement.remove();
}

function deleteAllItems() {
    let todoList = document.getElementById("todoList");

    if (todoList.children.length === 0) {
        Swal.fire("No Items to Delete!");
        return;
    }

    todoList.innerHTML = "";
}
