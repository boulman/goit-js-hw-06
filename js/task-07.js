const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handleInput);

function handleInput(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
}
