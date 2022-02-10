const bgImage = document.querySelector("#background-image");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("USERNAME_KEY");
const IMGBEFORELOGIN_CLASSNAME = "img-before-login";
const IMGAFTERLOGIN_CLASSNAME = "img-after-login";
const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const USERNAME_KEY = "username";

const bgImageManager = {
  logIn: function logInImage(arg) {
    arg.classList.add(IMGAFTERLOGIN_CLASSNAME);
    arg.classList.remove(IMGBEFORELOGIN_CLASSNAME);
  },
  logOut: function logOutImage(arg) {
    arg.classList.add(IMGBEFORELOGIN_CLASSNAME);
    arg.classList.remove(IMGAFTERLOGIN_CLASSNAME);
  },
};

const greetingManager = {
  welcomeTextOn: function welcome(arg) {
    greeting.innerText = `Hello ${arg}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  },
};

const logInfoManager = {
  formOn: function formOn(arg) {
    arg.classList.add(APPEAR_CLASSNAME);
    arg.classList.remove(HIDDEN_CLASSNAME);
    arg.addEventListener("submit", onLoginSubmit);
  },
  formOff: function formOff(arg) {
    arg.classList.add(HIDDEN_CLASSNAME);
    arg.classList.remove(APPEAR_CLASSNAME);
  },
};

if (savedUsername === null) {
  logInfoManager.formOn(loginForm);
} else {
  bgImageManager.logIn(bgImage);
  paintGreetings(savedUsername);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  bgImageManager.logIn(bgImage);
  logInfoManager.formOff(loginForm);
  const typedUsername = loginInput.value;
  localStorage.setItem("USERNAME_KEY", typedUsername);
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greetingManager.welcomeTextOn(username);
}
