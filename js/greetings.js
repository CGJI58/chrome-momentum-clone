const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typedUsername = loginInput.value;
  localStorage.setItem("USERNAME_KEY", typedUsername);
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
