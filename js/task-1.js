'use strict'

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: `, numberOfCategories.length);

const categoryTitle = document.querySelectorAll(".item h2");
const nameOfCategoryRef = categoryTitle.forEach((catagory) => {
  console.log(`Category: `, catagory.textContent);
  console.log(`Elements: `, catagory.nextElementSibling.children.length);
});

