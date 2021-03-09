const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messeges = [];

  if (name.value == "" || name.value == null) {
    messeges.push("please ensert name");
  }

  if (password.value.length <= 6) {
    e.preventDefault();
    messeges.push("password must be longer than 6 charecters");
  } else if (password.value.length >= 20) {
    e.preventDefault();
    messeges.push("password must be shorter than 20 charecters");
  } else if (password.value === "password") {
    e.preventDefault();
    messeges.push("password cannot be 'password'");
  }

  if (messeges.length > 0) {
    e.preventDefault();
    error.innerHTML = messeges.join(", ");
  }
});
