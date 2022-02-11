// const IMGBEFORELOGIN_CLASSNAME = "img-before-login";
const IMGAFTERLOGIN_CLASSNAME = "img-after-login";
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const bgImage = document.querySelector("#background-image");
const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

const bgImageManager = {
  imageToggle: function loginImage(arg) {
    arg.classList.toggle(IMGAFTERLOGIN_CLASSNAME);
  },
};

const greetingManager = {
  getUserName: function getUserName(arg) {
    greeting.innerText = `Hello ${arg}`;
  },
  welcomeTextToggle: function welcomeTextToggle() {
    greeting.classList.toggle(HIDDEN_CLASSNAME);
  },
};

const logManager = {
  formToggle: function formToggle(arg) {
    arg.classList.toggle(HIDDEN_CLASSNAME);
  },
};

if (savedUsername === null) {
  logManager.formToggle(loginForm);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  bgImageManager.imageToggle(bgImage);
  greetingManager.welcomeTextToggle();
  greetingManager.getUserName(savedUsername);
  logManager.formToggle(logoutForm);
  logoutForm.addEventListener("submit", onLogoutSubmit);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  bgImageManager.imageToggle(bgImage);
  logManager.formToggle(loginForm);
  logManager.formToggle(logoutForm);
  const typedUsername = loginInput.value;
  greetingManager.welcomeTextToggle(typedUsername);
  greetingManager.getUserName(typedUsername);
  localStorage.setItem(USERNAME_KEY, typedUsername);
  window.location.reload();
}

function onLogoutSubmit(arg) {
  arg.preventDefault();
  bgImageManager.imageToggle(bgImage);
  logManager.formToggle(logoutForm);
  logManager.formToggle(loginForm);
  localStorage.removeItem(USERNAME_KEY);
  greetingManager.welcomeTextToggle();
  window.location.reload();
}
