const colorBgEl = document.querySelector('[class="color"]');
const buttonEl = document.querySelector('[class="change-color"]');
const bodyEl = document.body;
buttonEl.addEventListener('click', onClick);

function onClick() {
  const color = getRandomHexColor();
  bodyEl.style.background = color;
  colorBgEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
