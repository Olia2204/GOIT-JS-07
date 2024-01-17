'use strict'
const inputLink = document.querySelector("input#font-size-control");
const spanTextLink = document.querySelector("span#text");

inputLink.addEventListener("input", (e) => {
  spanTextLink.style.fontSize = `${e.currentTarget.value}px`;
});