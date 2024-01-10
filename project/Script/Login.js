const user_name = localStorage.getItem("userName");
const loginForm = document.querySelector("form");
const enteredLogin = document.querySelector("h1")

if (localStorage.getItem("userName") === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", submitForm);
} else {
  doGreeting(user_name);
}

function submitForm(event) {
  event.preventDefault;
  const userName = document.querySelector("input").value;
  localStorage.setItem("userName", userName);
  loginForm.classList.add("hidden");
  doGreeting(userName);
}

function doGreeting(사용자이름) {
  enteredLogin.classList.remove("hidden");
  enteredLogin.innerText = `Hello ${사용자이름}`;
}
