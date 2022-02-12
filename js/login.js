const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const main = document.querySelector("#main");
const loginForm = document.querySelector(".login-form");
const logoutForm = document.querySelector(".logout-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

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
  greetingManager.welcomeTextToggle();
  greetingManager.getUserName(savedUsername);
  logManager.formToggle(logoutForm);
  logManager.formToggle(main);
  logoutForm.addEventListener("submit", onLogoutSubmit);
}

function onLoginSubmit(arg) {
  arg.preventDefault();
  logManager.formToggle(loginForm);
  logManager.formToggle(logoutForm);
  logManager.formToggle(main);
  const typedUsername = loginInput.value;
  greetingManager.welcomeTextToggle(typedUsername);
  greetingManager.getUserName(typedUsername);
  localStorage.setItem(USERNAME_KEY, typedUsername);
  window.location.reload();
}

function onLogoutSubmit(arg) {
  arg.preventDefault();
  logManager.formToggle(logoutForm);
  logManager.formToggle(loginForm);
  logManager.formToggle(main);
  localStorage.removeItem(USERNAME_KEY);
  greetingManager.welcomeTextToggle();
  window.location.reload();
}
