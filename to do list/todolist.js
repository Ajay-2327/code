const tasks = ["Eat", "Sleep", "Study", "Workout", "Read", "Write", "Clean", "Walk", "Cook", "Meditate"];

function addTask() {
  const list = document.getElementById("todo-list");
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.contentEditable = true;
  span.innerText = randomTask;

  li.appendChild(checkbox);
  li.appendChild(span);

  list.appendChild(li);
}

function removeTask() {
  const list = document.getElementById("todo-list");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
}
