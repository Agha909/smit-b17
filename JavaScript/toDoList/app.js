 const taskInput = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");
    const addBtn = document.querySelector("#addBtn");
    const clearAllBtn = document.querySelector("#clearAllBtn");

    const addTask = () => {
      const value = taskInput.value.trim();

      if (!value) {
        Swal.fire("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${value}</span>
        <span class="remove-icon">❌</span>
      `;

      li.querySelector(".remove-icon").addEventListener("click", () => {
        li.remove();
      });

      taskList.appendChild(li);
      taskInput.value = "";
    };

    const clearTasks = () => {
      if (!taskList.children.length) {
        Swal.fire("No tasks to delete!");
        return;
      }
      taskList.innerHTML = "";
    };

    addBtn.addEventListener("click", addTask);
    clearAllBtn.addEventListener("click", clearTasks);

    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });