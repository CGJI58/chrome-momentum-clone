const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function handleToDoSubmit(arg) {
  arg.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  const checkButton = document.createElement("button");
  checkButton.innerText = "V";
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  delButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", checkToDo);
  li.appendChild(delButton);
  li.appendChild(checkButton);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(arg) {
  const li = arg.target.parentNode;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();

  li.remove();
}

function checkToDo(arg) {
  const todo = arg.target.parentNode.querySelector("span");
  todo.classList.toggle("checked-todo");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
