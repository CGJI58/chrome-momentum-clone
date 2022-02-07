const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const bgImage = document.querySelector("#background-image");

const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const IMGBEFORELOGIN_CLASSNAME = "img-before-login";
const IMGAFTERLOGIN_CLASSNAME = "img-after-login";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(APPEAR_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  bgImage.classList.remove(IMGBEFORELOGIN_CLASSNAME);
  bgImage.classList.add(IMGAFTERLOGIN_CLASSNAME);
  paintGreetings(savedUsername);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(APPEAR_CLASSNAME);
  bgImage.classList.add(IMGAFTERLOGIN_CLASSNAME);
  bgImage.classList.remove(IMGBEFORELOGIN_CLASSNAME);
  const typedUsername = loginInput.value;
  localStorage.setItem("USERNAME_KEY", typedUsername);
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
