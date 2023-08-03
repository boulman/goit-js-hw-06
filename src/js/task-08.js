const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements["email"];
  if (!email.value || !password.value) {
    alert("Не всі поля заповненні");
    return;
  }
  const res = {
    email: email.value,
    password: password.value,
  };
  console.log(res);
  e.currentTarget.reset();
}
