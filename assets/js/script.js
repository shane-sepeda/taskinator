var formEl = document.querySelector("#task-form");
console.log(formEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");

// buttonEl.addEventListener("click", function() {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
// });

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);

    formEl.addEventListener("submit", createTaskHandler);
}