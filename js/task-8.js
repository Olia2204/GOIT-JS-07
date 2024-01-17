'use strict'

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  const Email = email.value;
  const Password = password.value;

  const formData = {
    Email,
    Password,
  };

  if (email.value === "" || password.value === "") {
    alert("Fill all fields!");
  } else {
    console.log(formData);
  }

  e.currentTarget.reset();
}