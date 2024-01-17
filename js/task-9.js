'use strict'
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const changeColorBtn = document.querySelector("button.change-color");
const colorValue = document.querySelector("span.color");
const bodyBackground = document.querySelector("body");

changeColorBtn.addEventListener("click", changeBackground);

function changeBackground() {
bodyBackground.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyBackground.style.backgroundColor;
}