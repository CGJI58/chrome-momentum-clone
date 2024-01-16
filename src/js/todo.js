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

  const checkButton = document.createElement("i");
  checkButton.classList.add("fas");
  checkButton.classList.add("fa-check");
  li.appendChild(checkButton);
  checkButton.addEventListener("click", checkToDo);
  // checkButton.addEventListener("mouseover", pointerManager);

  const delButton = document.createElement("i");
  delButton.classList.add("fas");
  delButton.classList.add("fa-trash-alt");
  li.appendChild(delButton);
  delButton.addEventListener("click", deleteToDo);
  // delButton.addEventListener("mouseover", pointerManager);

  const span = document.createElement("span");
  span.innerText = newToDo.text;
  li.appendChild(span);

  li.classList = newToDo.class;
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
  const checkedTodo = arg.target.parentNode;
  checkedTodo.classList.toggle("checked-todo");

  toDos.filter(function addCheck(item) {
    if (item.id == checkedTodo.id) {
      if (item.class == undefined) item.class = "checked-todo";
      else if (item.class == "checked-todo") item.class = undefined;
      else
        console.log(
          "todo list의 span에 checked-todo 외의 class를 추가하면 정상적으로 작동 안합니다."
        );
    }
    return true;
  });
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
