const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(e) {
  const value = e.currentTarget.value;
  if (!value) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
}
