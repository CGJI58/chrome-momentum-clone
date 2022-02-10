const IMGBEFORELOGIN_CLASSNAME = "img-before-login";
const IMGAFTERLOGIN_CLASSNAME = "img-after-login";
const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const USERNAME_KEY = "username";

const bgImage = document.querySelector("#background-image");
const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

const bgImageManager = {
  login: function loginImage(arg) {
    arg.classList.add(IMGAFTERLOGIN_CLASSNAME);
    arg.classList.remove(IMGBEFORELOGIN_CLASSNAME);
  },
  logout: function logoutImage(arg) {
    arg.classList.add(IMGBEFORELOGIN_CLASSNAME);
    arg.classList.remove(IMGAFTERLOGIN_CLASSNAME);
  },
};

const greetingManager = {
  welcomeTextOn: function welcomeTextOn(arg) {
    greeting.innerText = `Hello ${arg}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  },
  welcomeTextOff: function welcomeTextOff() {
    greeting.classList.add(HIDDEN_CLASSNAME);
  },
};

const logManager = {
  formOn: function formOn(arg) {
    arg.classList.add(APPEAR_CLASSNAME);
    arg.classList.remove(HIDDEN_CLASSNAME);
  },
  formOff: function formOff(arg) {
    arg.classList.add(HIDDEN_CLASSNAME);
    arg.classList.remove(APPEAR_CLASSNAME);
  },
};

if (savedUsername === null) {
  logManager.formOn(loginForm);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  bgImageManager.login(bgImage);
  greetingManager.welcomeTextOn(savedUsername);
  logManager.formOn(logoutForm);
  logoutForm.addEventListener("submit", onLogoutSubmit);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  bgImageManager.login(bgImage);
  logManager.formOff(loginForm);
  logManager.formOn(logoutForm);
  const typedUsername = loginInput.value;
  greetingManager.welcomeTextOn(typedUsername);
  localStorage.setItem(USERNAME_KEY, typedUsername);
  window.location.reload();
}

function onLogoutSubmit(arg) {
  arg.preventDefault();
  bgImageManager.logout(bgImage);
  logManager.formOff(logoutForm);
  logManager.formOn(loginForm);
  localStorage.removeItem(USERNAME_KEY);
  greetingManager.welcomeTextOff();
  window.location.reload();
}
