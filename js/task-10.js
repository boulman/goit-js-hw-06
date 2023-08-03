function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const [value, create, destroy] = document.querySelector("#controls").children;
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => createBoxes(value.value));
destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${30 + 10 * i}px; height: ${
      30 + 10 * i
    }px; background-color: ${getRandomHexColor()};"></div>`;
  }
  boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
