let counterValue = 0;

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", handleDecrement);
document
  .querySelector("[data-action='increment']")
  .addEventListener("click", handleIncrement);

const counter = document.querySelector("#value");

function handleDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
function handleIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
