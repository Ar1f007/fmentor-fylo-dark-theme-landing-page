"use strict";

const formBtn = document.querySelector(".form-btn");
const inputFieldEmail = document.querySelector("#email");
const validationTextField = document.querySelector(".validation-text");

//  Event handler - email validation
formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = inputFieldEmail.value;
  validate(email);
});

/**
 *  Function to validate email
 * @param {string} email
 */
const validate = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(mailFormat)) {
    inputFieldEmail.value = "";
    showMessage("success", "Thank you");
  } else if (!email.match(mailFormat) || email.length === 0) {
    showMessage("error", "Please enter a valid email address");
  }
};

/**
 * Function to display success/error message
 * @param {string} className success / error
 * @param {string} message   validation message
 */
const showMessage = (className, message) => {
  validationTextField.classList.add(className);
  validationTextField.textContent = message;
  validationTextField.style.display = "block";

  setTimeout(() => {
    validationTextField.classList.remove(className);
    validationTextField.textContent = "";
    validationTextField.style.display = "none";
  }, 1500);
};
