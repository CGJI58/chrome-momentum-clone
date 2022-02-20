console.log(window.outerWidth, window.outerHeight);
console.log(window.innerWidth, window.innerHeight);

const bodySize = document.querySelector("html");
const bgImageSize = document.querySelector("#background-image");
// console.log(document);

bodySize.style.width = `${window.outerWidth}`;
bodySize.style.height = `${window.outerHeight}`;
bgImageSize.style.width = `${window.outerWidth}`;
bgImageSize.style.height = `${window.outerHeight}`;
