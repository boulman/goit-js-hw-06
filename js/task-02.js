const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function addIngredient(arr) {
  const res = arr.map((ing) => {
    const li = document.createElement("li");
    li.textContent = ing;
    li.className = "item";
    return li;
  });
  document.querySelector("#ingredients").append(...res);
}
addIngredient(ingredients);
