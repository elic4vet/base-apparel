let input = document.querySelector("input");
let button = document.querySelector("button");
let success = document.querySelector(".success");
let error = document.querySelector(".error");

button.addEventListener("click", (e) => {
  let email = input.value; // Move the email assignment inside the event listener

  if (email.includes("@") && email.length > 11) {
    success.style.display = "block";
    error.style.display = "none";
  } else {
    error.style.display = "block";
    success.style.display = "none";
  }
});
