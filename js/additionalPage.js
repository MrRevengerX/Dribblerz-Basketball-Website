// Assigning HTML elements to variables.
const regbtn = document.getElementsByClassName("team-registration-button")[0];
const managerContact = document.getElementById("team-manager-contact");
const managerEmail = document.getElementById("team-manager-email");
const nameFields = document.getElementsByClassName("name-input");
const formInputFields = document.getElementsByClassName("form-input-field");
const registrationCheckbox = document.getElementById("rule-agree");

//Adding event listener to "team-registration-button" button. 
regbtn.addEventListener("click", validateForm);
let numberOfErrors = 0;

// Adding event listener to "#rule-agree" checkbox.
registrationCheckbox.addEventListener("change", () => {
  var warningMessage =
    registrationCheckbox.parentElement.getElementsByClassName(
      "warning-messages"
    )[0];
  warningMessage.style.opacity = "0";
});

// Adding event listener to every "form-input-field" in registration form.
for (var x = 0; x < formInputFields.length; x++) {
  var inputfield = formInputFields[x];
  inputfield.addEventListener("input", removeRegInputWarning);
}

// Function to remove warning message when typing in input field
function removeRegInputWarning(event) {
  var regInputField = event.target;
  var warningMessage =
    regInputField.parentElement.getElementsByClassName("warning-messages")[0];
  warningMessage.style.opacity = "0";
  regInputField.style.borderColor = "#e05c09";
}

// Function to run relevant functions to validate registration form.
function validateForm() {
  numberOfErrors = 0;
  for (var i = 0; i < nameFields.length; i++) {
    var nameField = nameFields[i];
    validateNameField(nameField);
  }
  validateRegEmail();
  validatePhone();
  validateRuleAgree();
  if (numberOfErrors > 1) {
    document.documentElement.scrollTop = "1160";
  } else if (numberOfErrors == 0) {
    sendViaEmail();
  }
}

// Functions to validate name field.
function validateNameField(name) {
  if (validateName(name)) {
    var nameParent = name.parentElement;
    var warningMessage =
      nameParent.getElementsByClassName("warning-messages")[0];
    warningMessage.style.opacity = "1";
    name.style.borderColor = "red";
    numberOfErrors += 1;
  }
}

function validateName(name) {
  if (name.value == "" || name.value == null) {
    return true;
  } else {
    return false;
  }
}


// Function to validate if the rule agree checkbox is checked.
function validateRuleAgree() {
  if (registrationCheckbox.checked == true) {
    return true;
  } else {
    var warningMessage =
      registrationCheckbox.parentElement.getElementsByClassName(
        "warning-messages"
      )[0];
    warningMessage.style.opacity = "1";
    numberOfErrors += 1;
    console.log(numberOfErrors);
  }
}

//Function to validate registration manager email
function validateRegEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(managerEmail.value)) {
  } else {
    var emailParent = managerEmail.parentElement;
    var warningMessage =
      emailParent.getElementsByClassName("warning-messages")[0];
    warningMessage.style.opacity = "1";
    managerEmail.style.borderColor = "red";
    numberOfErrors += 1;
  }
}

//Functions to validate registration manager phone number
function validatePhone() {
  var phoneNumformat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (isNaN(managerContact.value) || managerContact.value <= 0) {
    showPhoneNumWarning();
    numberOfErrors += 1;
  } else if (managerContact.value.length < 10) {
    showPhoneNumWarning();
    numberOfErrors += 1;
  } else if (phoneNumformat.test(managerContact.value)) {
    var phoneNumParent = managerContact.parentElement;
    var warningMessage =
      phoneNumParent.getElementsByClassName("warning-messages")[0];
    warningMessage.innerText = `Enter phone number with country code ex: +94xxxxxxxxx`;
    showPhoneNumWarning();
    numberOfErrors += 1;
  }
}

function showPhoneNumWarning() {
  var phoneNumParent = managerContact.parentElement;
  var warningMessage =
    phoneNumParent.getElementsByClassName("warning-messages")[0];
  warningMessage.style.opacity = "1";
  managerContact.style.borderColor = "red";
}

// Function to send validated details via email.
function sendViaEmail() {
  window.open(
    `mailto:dribblerz@dribblerz.com?subject=IntoTheHoop2022 Team Registration&body=Team Name: ${nameFields[0].value}%0D%0AManager Name: ${nameFields[1].value}%0D%0AManager Contact: ${managerContact.value}%0D%0AManager Email: ${managerEmail.value}
    %0D%0A%0D%0ATeam Player Details
    %0D%0APlayer 1 Name: ${nameFields[2].value}
    %0D%0APlayer 2 Name: ${nameFields[3].value}
    %0D%0APlayer 3 Name: ${nameFields[4].value}
    %0D%0APlayer 4 Name: ${nameFields[5].value}`
  );
}

// ----------- Script for newsletter sign up submission -----------//

// Assigning HTML elements to variables.
const button = document.getElementsByClassName("btn-newsletter")[0];
const email = document.getElementsByClassName("newsletter-email")[0];
const warningMessage = document.getElementsByClassName("email-warning")[0];
const successMessage = document.getElementsByClassName("newsletter-success")[0];
const newsletterForm = document.getElementsByClassName("newsletter-form")[0];

// Adding event listener to newsletter sign up button click
button.addEventListener("click", validateEmail);

// Adding event listener to email field in newsletter
email.addEventListener("input", removeWarning);

//Function to validate user email in newsletter field
function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(email.value)) {
    newsletterForm.style.display = "none";
    successMessage.style.display = "block";
    setTimeout(resetForm, 5000);
  } else {
    warningMessage.style.opacity = "1";
    email.style.borderColor = "red";
  }
}

// Function to remove warning message when typing in input field
function removeWarning() {
  email.style.borderColor = "#e05c09";
  warningMessage.style.opacity = "0";
}

// Function to reset newsletter section
function resetForm() {
  email.value = "";
  newsletterForm.style.display = "block";
  successMessage.style.display = "none";
}
