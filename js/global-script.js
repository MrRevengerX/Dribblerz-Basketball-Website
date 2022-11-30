// ----------Script for editors panel----------//

const editorDetailPanel = document.getElementsByClassName("page-editor")[0];

const editorPanelLeft = window
  .getComputedStyle(document.getElementsByClassName("page-editor")[0], null)
  .getPropertyValue("left");

// Function to open editor panel
const editorOpen = document.getElementsByClassName("view-editor")[0];
editorOpen.addEventListener("click", () => {
  editorDetailPanel.style.left = "0px";
  editorDetailPanel.style.opacity = "1";
});

// Function to close editor panel
const editorExit = document.getElementsByClassName("editor-exit")[0];
editorExit.addEventListener("click", () => {
  editorDetailPanel.style.left = editorPanelLeft;
  editorDetailPanel.style.opacity = "0";
});

//----------Script for back to top button----------//

// Function to scroll to top when click back to top button
const backToTopBtn = document.getElementsByClassName("back-to-top")[0];
backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Function to appear and dissaper back to top button when scroll
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop <= 100) {
    backToTopBtn.classList.remove("show-btt");
  } else {
    backToTopBtn.classList.add("show-btt");
  }
});

// ------- Script for navigation logo click---------//

const navLogo = document.getElementById("logo");
navLogo.addEventListener("click", () => {
  location.href = "home.html";
});
