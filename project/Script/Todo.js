//1 html에 tofoform 추가 v
//2 todoForm에 인풋값 제출하기 v
//3 제출된 인풋 값 로컬스토리지에 저장 v//
//3-1 새로고침 후 새로운 인풋 값을 넣어도 기존 값에 추가하기//v
//4 로컬스토리지에 저장된 값 리스트에 추가해서 보여주기 v
//4-1 즉각즉각 보여주기v
//5 원하는 항목 리스트에서 지우기(버튼)v
//6로컬스토리지에서도 지우기
///인풋되는 값마다 id 제공. 로컬스토리지에서 지울때 id를 통해 제거
// Date.now()를 통해 고유한 값을 생성할 수 있지만 배열의 길이를 찾아서,1,2,3,4이런 식으로 어레이주면 안될까?//참조 문제땜에 꼬인다.

//------------------------------------------------------------------------------------
const todoForm = document.querySelector("#todoForm");

let todoThings = [];
todoForm.addEventListener("submit", submitInput);
const savedThings = localStorage.getItem("todoThings");

if (savedThings !== null) {
  todoThings = JSON.parse(savedThings); //여기서 todoThings를 다시 선언하기 위해, 위에서 let 사용.
  //다시 새로고침을 하더라도 로컬스토리지에 이미 저장된 값이 있으면 그 값을 다시 할당해준다.//todoThings의 초기화 방지

  todoThings.forEach((v) => createList(v));
}

//-------------------------------------------------------------------------------------
function submitInput(event) {
  event.preventDefault();
  const submittedInput = todoForm.querySelector("input").value;

  const submittedObj = {
    id: Date.now(),
    value: submittedInput,
  };
  todoThings.push(submittedObj);
  saveSubmitted();
  createList(submittedObj); // 이게 있어야 새로 넣은 인풋 값이 바로바로 업데이트 된다.
  todoForm.querySelector("input").value = "";
}

function saveSubmitted() {
  localStorage.setItem("todoThings", JSON.stringify(todoThings));
}

function createList(v) {
  const ul = document.createElement("ul");
  ul.id = v["id"]; ///.id를 통해 id 추가
  ul.innerText = v["value"];

  //document.querySelector("li").innerText = v;
  //근데 참조하는거면 이건 왜 안돼? ///아 아직 도큐먼트에  추가가 안되어서 그렇대

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.addEventListener("click", deletList);

  document.querySelector("#todoList").appendChild(ul);
  ul.appendChild(deleteBtn); // 직접 만든 값에 할당해주기 그래야 forEach루프를 돌떄도 알맞은 위치에 생김.
}

function deletList(event) {
  const removeLi = event.target.parentElement;

  todoThings = todoThings.filter((v) => v["id"] !== parseInt(removeLi["id"]));
  saveSubmitted(); //다시 저장해줘야해

  removeLi.remove();
}
