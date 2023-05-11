// z-1
// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const categoryElQuantity = item.querySelectorAll('li').length;

//   console.log(`Category: ${categoryName}\nElements: ${categoryElQuantity}`);
// });
// z-2
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  ingredientList.appendChild(itemEl);
});
