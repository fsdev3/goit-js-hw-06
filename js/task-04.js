const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

decrementEl.addEventListener('click', onDecrement);
incrementEl.addEventListener('click', onIncrement);

function onDecrement() {
  counterValue -= 1;
  updateCounter();
}

function onIncrement() {
  counterValue += 1;
  updateCounter();
}

function updateCounter() {
  spanEl.textContent = counterValue;
}
