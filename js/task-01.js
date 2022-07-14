const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const category1 = categories[0].firstElementChild.textContent;
const elements1 = categories[0].querySelectorAll("li").length
console.log(`Category: ${category1}`);
console.log(`Elements: ${elements1}`);


const category2 = categories[1].firstElementChild.textContent;
const elements2 = categories[1].querySelectorAll("li").length
console.log(`Category: ${category2}`);
console.log(`Elements: ${elements2}`);


const category3 = categories[2].firstElementChild.textContent;
const elements3 = categories[2].querySelectorAll("li").length
console.log(`Category: ${category3}`);
console.log(`Elements: ${elements3}`);