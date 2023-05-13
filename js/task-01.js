const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryNames = item.querySelector('h2').textContent;
  const categoryElQuantity = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryNames}\nElements: ${categoryElQuantity}`);
});
