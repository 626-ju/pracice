const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

function loginSubmit(eventOccur) {
  const userName = loginInput.value; //**블록 바깥에서 선언하면 이벤트가 실행되기 전 빈 값이 할당되어버린다.
  localStorage.setItem(USER_NAME, userName);
  eventOccur.preventDefault();
  loginForm.classList.add("hidden");
  doGreeting(userName);
}

function doGreeting(savedUserName) {
  document.querySelector("#greeting").innerText = `Hello ${savedUserName}`;
  document.querySelector("h1").classList.remove("hidden");
}

const USER_NAME = "userName";
const savedUserName = localStorage.getItem(USER_NAME);//**맨처음엔 빈 값. 그 다음 시행부터 저장된 키 값이 들어온다.

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginSubmit);
} else {
  doGreeting(savedUserName);
  //greeting.classList.remove("hidden"); //왜 그냥 greeting이 가능??greeting은 id인데?
}





//자바스크립트는 이벤트가 실행될때의 정보를 함수의 첫번째 인수로 넣어서 실행시켜준다.
//localStorage.setItem("key", "value")
//localStorage.getItem("key")  //;
//localStorage.remove("key") //
//반복되는 스트링은 변수로 만드는 것이 좋다.
