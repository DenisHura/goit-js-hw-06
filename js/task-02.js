const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
// const createItem = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     const item = document.createElement("li");
//     item.classList.add("item")
//     item.textContent = array[i]
//     console.log(item)
//   }
  
// }

// createItem(ingredients)


const ingredientsList = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
    return item;
})
list.append(...ingredientsList)
