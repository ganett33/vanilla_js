const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
  }

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText ="❌";
  delBtn.addEventListener("click", deleteToDos)
  span.innerText = text
      li.appendChild(delBtn);
      li.appendChild(span);
      li.id = newId;
      toDoList.appendChild(li);
      const toDoObj = {
          text:text,
          id: newId
      };
      toDos.push(toDoObj);
      saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}
function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        }); 
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}



init();
