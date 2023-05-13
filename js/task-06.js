const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur);

function onBlur() {
  const length = inputEl.value.length;
  const targetLength = Number(inputEl.dataset.length);
  inputEl.classList.remove('valid', 'invalid');

  if (length === targetLength) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
