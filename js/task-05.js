const inputEl = document.querySelector('[id="name-input"]');
const outputEl = document.querySelector('[id="name-output"]');

inputEl.addEventListener('input', customerName);

function customerName(event) {
  console.log(event.target.value);

  const value = event.target.value.trim();
  if (value === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = value;
  }
}
