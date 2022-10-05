const lengthInputRef = document.querySelector(`[data-length = '6']`);
const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', (event) =>{
  if (event.currentTarget.value.length == lengthInputRef.dataset.length) { inputEl.classList.remove('invalid'), inputEl.classList.add('valid'); }
  else { inputEl.classList.remove('valid'), inputEl.classList.add('invalid') };
})
