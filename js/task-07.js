const inputEl = document.querySelector('input#font-size-control');
const targetText = document.querySelector('[id="text"]');
inputEl.addEventListener('input', onInput);

function onInput() {
  const value = inputEl.value;
  targetText.style.fontSize = value + 'px';
}
