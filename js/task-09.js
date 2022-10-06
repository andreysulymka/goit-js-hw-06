function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('span');
const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', (event) => {
    document.body.style.backgroundColor = getRandomHexColor();
    spanColor.textContent = getRandomHexColor();  
})