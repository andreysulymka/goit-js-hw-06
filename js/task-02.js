const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainerRef = document.querySelector('#ingredients');
console.log(ingredientsContainerRef);
const elements = [];

for (let i = 0; i < ingredients.length; i += 1){
  
  const element = ingredients[i];
  
const itemRef = document.createElement('li');
itemRef.textContent = ingredients[i];
itemRef.classList.add('item');
console.log(itemRef);
  
elements.push(itemRef);
};
console.log(elements);

ingredientsContainerRef.append(...elements);
