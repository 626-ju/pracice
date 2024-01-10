const todoForm = document.querySelector("#todoForm");


const todoList = document.querySelector("#todoList");

function todoSubmit(eventOccur){
    const todoThings = todoForm.querySelector("input").value;//const 사용 유심히 보기

    eventOccur.preventDefault();
    localStorage.setItem("todoThings", todoThings);
    
    /*
    const createTodoThings = document.createElement("ul")
    todoList.appendChild(createTodoThings)
    todoList.querySelector("ul").innerText = localStorage.getItem("todoThings")
    */
    todoForm.querySelector("input").value=''; //요소 수정
    //todoThing =''; //const를 사용해서 변경이 안된다.
}

todoForm.addEventListener("submit", todoSubmit);


let b = 10;
const a = b;
b=5;

console.log(a);