const numberCategories = document.querySelectorAll('h2');
console.log('Number of categories:', numberCategories.length);

const nameFirstCategory = document.querySelectorAll('h2');
console.log('Category:', nameFirstCategory[0].textContent);

const animalList = document.querySelectorAll('ul')[1];
const animalsRef = animalList.querySelectorAll('li');
console.log('Elements:', animalsRef.length);

const nameSecondCategory = document.querySelectorAll('h2');
console.log('Category:', nameFirstCategory[1].textContent);

const productsList = document.querySelectorAll('ul')[2];
const productsRef = productsList.querySelectorAll('li');
console.log('Elements:', productsRef.length);

const nameThirdCategory = document.querySelectorAll('h2');
console.log('Category:', nameFirstCategory[2].textContent);

const technologiesList = document.querySelectorAll('ul')[3];
const technologiesRef = technologiesList.querySelectorAll('li');
console.log('Elements:', technologiesRef.length);
