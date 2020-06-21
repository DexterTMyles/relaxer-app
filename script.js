const container = document.getElementById("container");
const text = document.getElementById("text");
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const colors = new Array("#ff0000", "#3399ff", "#4dff4d", "red");
let firstName = prompt("What is your Name?");
let relax = document.getElementById("relax");

breathAnimation();
header();

function header() {
  relax.innerText = `RELAX ${firstName.toUpperCase()}`;
}

function breathAnimation() {
  text.innerText = `BREATHE IN ${firstName.toUpperCase()}`;
  container.className = "container grow";
  container.style.backgroundColor = colors[2];
  text.style.color = colors[0];

  setTimeout(() => {
    text.innerText = `HOLD ${firstName.toUpperCase()}`;
    container.style.backgroundColor = colors[1];
    text.style.color = colors[2];

    setTimeout(() => {
      text.innerText = `BREATHE OUT ${firstName.toUpperCase()}`;
      container.className = "container shrink";
      container.style.backgroundColor = colors[0];
      text.style.color = colors[1];
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
