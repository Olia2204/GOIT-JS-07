"use strict"
const inputLink = document.querySelector("#validation-input");

inputLink.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (
    e.currentTarget.value.length ===
    Number(inputLink.getAttribute("data-length"))
  ) {
    inputLink.classList.add("valid");
    inputLink.classList.remove("invalid");
  } else {
    inputLink.classList.add("invalid");
    inputLink.classList.remove("valid");
  }
}