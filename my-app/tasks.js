let myTasks = [
  { name: "Do my homework", completed: true },
  { name: "Walk my dog", completed: true }
];

let filters = { searchText: "", pending: false };

const addTask = function(newTask) {
  myTasks.push({
    name: newTask,
    completed: false
  });
  renderTasks(myTasks, filters);
};

const renderTasks = function(arrTasks, filters) {
  let filteredTasks = arrTasks.filter(function(task) {
    return task.name.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredTasks = filteredTasks.filter(function(task) {
    if (filters.pending) {
      return !task.completed;
    } else {
      return true;
    }
  });

  const countUncompleted = filteredTasks.filter(function(task) {
    return task.completed === false;
  });

  const title = document.querySelector("#title");
  title.textContent = `You have ${countUncompleted.length} pending tasks`;

  document.querySelector("#taskList").innerHTML = "";

  filteredTasks.forEach(function(task) {
    const taskElement = document.createElement("p");
    taskElement.textContent = task.completed
      ? `${task.name} [Completed]`
      : `${task.name} [Pending]`;

    document.querySelector("#taskList").appendChild(taskElement);
  });
};

renderTasks(myTasks, filters);

document.querySelector("#task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  addTask(e.target.elements.newTask.value);
  e.target.elements.newTask.value = "";
});

document.querySelector("#search").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTasks(myTasks, filters);
});

document.querySelector("#only-pending").addEventListener("change", function(e) {
  filters.pending = e.target.checked;
  renderTasks(myTasks, filters);
});
