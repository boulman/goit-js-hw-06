const input = document.querySelector("#validation-input");
console.dir(input);
input.addEventListener("blur", handleBlur);

function handleBlur(e) {
  if (e.currentTarget.value.length == e.currentTarget.dataset.length) {
    e.currentTarget.className = "valid";
  } else {
    e.currentTarget.className = "invalid";
  }
}
