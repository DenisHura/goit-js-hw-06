const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
const createItem = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const item = document.createElement("li");
    item.classList.add("item")
    item.textContent = array[i]
    list.append(item)
  }
}

createItem(ingredients)

