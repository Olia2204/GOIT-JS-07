"use strict"
const inputTextRef = document.querySelector("#name-input");
const outputTextRef = document.querySelector("#name-output");

inputTextRef.addEventListener("input", (event) => {
  const textValue = event.currentTarget.value;
  outputTextRef.textContent = textValue;
  if (textValue === "") {
    outputTextRef.textContent = "Anonymous";
  }
});