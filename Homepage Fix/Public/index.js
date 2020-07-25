// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const menuLinks = document.querySelectorAll('.menu');
const homeLinks = document.querySelectorAll('.active');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
    menuLinks.forEach(item => item.style.display = 'block');
    homeLinks.forEach(item => item.style.display = 'block');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    menuLinks.forEach(item => item.style.display = 'block');
    homeLinks.forEach(item => item.style.display = 'block');
  }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
 /*  M.Modal.init(modals); */

  var items = document.querySelectorAll('.collapsible');
  /* M.Collapsible.init(items); */

});