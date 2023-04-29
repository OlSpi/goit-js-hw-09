const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let intervalId = 0;

start.addEventListener('click', changingColor);
stop.addEventListener('click', stopChangingColor);

function changingColor() {
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if (intervalId) {
    start.disabled = true;
    stop.disabled = false;
  }
}

function stopChangingColor() {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(intervalId);
}
