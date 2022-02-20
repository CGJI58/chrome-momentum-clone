console.log(window.outerWidth, window.outerHeight);
console.log(window.innerWidth, window.innerHeight);

const bodySize = document.querySelector("body");
// console.log(document);

bodySize.style.width = `${window.innerWidth}px`;
bodySize.style.height = `${window.innerHeight}px`;

// bodySize.onresize = "parent.resizeTo(500,400)";
// bodySize.onload = "parent.resizeTo(500,400)";
