let input = document.querySelector("input");
let button = document.querySelector("button");
let success = document.querySelector(".success");
let error = document.querySelector(".error");

let email = input.value;

button.addEventListener("click", (e) => {
  if (email.includes("@")) {
    success.style.display = "block";
  } else {
    error.style.display = "block";
    window.reload();
  }
});
