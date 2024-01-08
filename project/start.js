const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input");






function loginSubmit(eventOccur) {
  eventOccur.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  document.querySelector("#greeting").innerText = `Hello ${userName}`;
  document.querySelector("h1").classList.remove('hidden');

}

loginForm.addEventListener('submit', loginSubmit)

//자바스크립트는 이벤트가 실행될때의 정보를 함수의 첫번째 인수로 넣어서 실행시켜준다.