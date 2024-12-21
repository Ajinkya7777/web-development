const body = document.getElementsByTagName("body")[0];

function setColor(color) {
  body.style.backgroundColor = color;
}

console.log(Math.random() * 10);
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${blue}, ${green})`;
  body.style.backgroundColor = color;
}
