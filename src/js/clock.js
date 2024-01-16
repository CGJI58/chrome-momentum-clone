const today = document.querySelector("#date");
const clock = document.querySelector("#clock");

function getToday() {
  const dateInfo = new Date();
  const year = String(dateInfo.getFullYear()).padStart(4, "0");
  const month = String(dateInfo.getMonth() + 1).padStart(2, "0");
  const date = String(dateInfo.getDate()).padStart(2, "0");
  today.innerText = `${year}-${month}-${date}`;
}

function getClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getToday();
setInterval(getToday, 1000);

getClock();
setInterval(getClock, 1000);
