// Assigning HTML elements to variables.
const username = document.getElementById("Name");
const useremail = document.getElementById("Email");
const userchoice = document.getElementById("querySubject");
const userquery = document.getElementById("textarea");
const checkbtn = document.getElementById("checkbtn");
let popup = document.getElementById("popup");

//Event listener for button to run functions
checkbtn.addEventListener("click", runvalidation);

//function to get validated user inputs to check form
function openPopup() {
  document.getElementById("popname").innerHTML =
    "Your name: <span class='queryPopField'>" + username.value + "</span>";
  document.getElementById("popemail").innerHTML =
    "Your e-mail: <span class='queryPopMail'>" + useremail.value + "</span>";
  document.getElementById("popsubject").innerHTML =
    "Query subject: <span class='queryPopField'>" +
    userchoice.value +
    "</span>";
  document.getElementById("popquery").innerHTML =
    "Your query: <span class='queryPopField'>" + userquery.value + "</span>";
  popup.classList.add("open-popup");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//function to edit user data from check form
function EditPopup() {
  popup.classList.remove("open-popup");
}

//function to close check form
function closePopup() {
  popup.classList.remove("open-popup");
  document.getElementById("query-form").reset();
}

//function to join alerts to string
function alerts(alertArray) {
  if (alertArray.length === 0) {
    openPopup();
  } else {
    alert(alertArray.join("\n"));
    return false;
  }
}

//main function to actuate validation functions
function runvalidation() {
  var alertArray = [];
  validatename(alertArray);
  validateEmail(alertArray);
  validateOption(alertArray);
  validateTextarea(alertArray);
  alerts(alertArray);
}

function sendmail() {
  window.open(
    `mailto:devmal.20210220@iit.ac.lk?subject=${userchoice.value}&body=Name: ${username.value}%0D%0AEmail: ${useremail.value}%0D%0AQuery: ${userquery.value}`
  );
}

//validates user name
function validatename(alertArray) {
  if (username.value === "" || username.value == null) {
    alertArray.push("Name field cannot be empty.");
    return false;
  } else if (username.value.length <= 3) {
    alertArray.push("Name must be longer than 3 characters.");
    return false;
  } else {
    return true;
  }
}

//validates user email
function validateEmail(alertArray) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(useremail.value)) {
    return true;
  } else {
    alertArray.push("E-mail address is not valid.");
    return false;
  }
}

//validates user query option
function validateOption(alertArray) {
  let x = userchoice.value;
  if (x === "SubjectofQuery") {
    alertArray.push("Query subject must be selected.");
    return false;
  } else {
    return true;
  }
}

//validates user query
function validateTextarea(alertArray) {
  if (userquery.value === "" || userquery.value == null) {
    alertArray.push("Query field cannot be empty.");
    return false;
  } else {
    return true;
  }
}
