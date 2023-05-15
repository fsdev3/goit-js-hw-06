const numbersEl = document.querySelector('[type="number"]');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createEl.addEventListener('click', onCreate);
destroyEl.addEventListener('click', onDestroy);

function onCreate() {
  const value = Number(numbersEl.value);
  if (value === 0) {
    return;
  }
  createBoxes(value);
}

function onDestroy() {
  numbersEl.value = 0;
  boxesEl.innerHTML = '';
}

function createBoxes(value) {
  let size = 30;
  let allCreatedBoxes = '';
  for (let i = 1; i <= value; i += 1) {
    let newBox = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    allCreatedBoxes += newBox;
    size += 10;
  }
  boxesEl.innerHTML = allCreatedBoxes;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
