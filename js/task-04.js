let counterValue = 0;
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');


decrementBtnRef.addEventListener('click', () => {
    counterValue = counterValue - 1;
    const ValueEl = document.querySelector('span');
    ValueEl.textContent = counterValue;
}
);
incrementBtnRef.addEventListener('click', () => {
    counterValue = counterValue + 1;
    const ValueEl = document.querySelector('span');
    ValueEl.textContent = counterValue;
}
);
