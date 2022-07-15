

   const category = document.querySelectorAll('.item');
const numberOfCategory = category.length;
console.log('Number of categories:', numberOfCategory);
category.forEach((el) => {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});
