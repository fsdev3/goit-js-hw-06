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
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientList = document.getElementById('ingredients');

// ingredients.forEach(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');
//   ingredientList.appendChild(itemEl);
// });
// z-3
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGallery = document.querySelector('.gallery');

const galleryItems = images
  .map(
    image =>
      `<li class='img-item'><img src='${image.url}' alt='${image.alt}'></li>`
  )
  .join('');

imagesGallery.insertAdjacentHTML('afterbegin', galleryItems);
// z-4
