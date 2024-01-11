const todoForm = document.querySelector("#todoForm");

const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit", todoSubmit);

let todos = []; //객체형이기 때문에 const여도 내부의 값 변경 가능, 새로 선언x
                //배열을 새로 선언하기 위해서는 let으로 해줘야함

const TODOS_KEY = "todos";
const savedtodos = JSON.parse(localStorage.getItem(TODOS_KEY));




    savedtodos.forEach(v=>createTodoList(v));
    todos = savedtodos;

//////////////////////////////////////////////////////////////////////




function todoSubmit(eventOccur) {
  //1.todo리스트 입력 후 제출 하면 발생하는 함수
  eventOccur.preventDefault();
  
  const todoThings = todoForm.querySelector("input").value; //const 사용 유심히 보기
  //createTodoList(todoThings);

  todoForm.querySelector("input").value = ""; //요소 수정
  //todoThing =''; //const를 사용해서 변경이 안된다.
  todos.push(todoThings);
  saveTodo();
}

function createTodoList(todoThings) {
  //2.제출된 인풋 값을 리스트에 추가하는 함수
  //localStorage.setItem("todoThings", todoThings);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todoThings;

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", deleteTodoThing);

  li.appendChild(span);
  todoList.appendChild(li);
  li.appendChild(deleteBtn).innerText = "❌";
}

function deleteTodoThing(eventOccur) {
  //3.버튼을 누르면 해당 리스트를 지우는 함수
  todoList.removeChild(eventOccur.target.parentElement);
  //위 아래 차이 무엇?
  //const removeLi = eventOccur.target.parentElement;
  //removeLi.remove();
  
}

function saveTodo() {
  //4. 제출된 인풋값을 로컬스토리지에 저장하는 함수
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
