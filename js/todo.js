const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id; // li태그 속 id 생성
  toDoList.appendChild(li);
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = newToDo.text;
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
}

function handleToDoFormSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoFormSubmit);

const savedToDos = localStorage.getItem("toDos");

if (savedToDos != null) {
  const parseSavedToDos = JSON.parse(savedToDos);
  toDos = parseSavedToDos;
  parseSavedToDos.forEach(paintToDo);
}
