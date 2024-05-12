const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (eInput.value === "") {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }

  if (pInput.value === "") {
    pField.classList.add("shake", "error");
  } else {
    checkPass();
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    window.location.href = "inf.html";
  }
});

function checkEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!eInput.value.match(pattern)) {
    eField.classList.add("error");
    eField.classList.remove("valid");
    const errorTxt = eField.querySelector(".error-txt");
    errorTxt.innerText = eInput.value !== "" ? "Enter a valid email address" : "Email can't be blank";
  } else {
    eField.classList.remove("error");
    eField.classList.add("valid");
  }
}

function checkPass() {
  if (pInput.value === "") {
    pField.classList.add("error");
    pField.classList.remove("valid");
  } else {
    pField.classList.remove("error");
    pField.classList.add("valid");
  }
}