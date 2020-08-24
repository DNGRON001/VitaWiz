// DOM elements
const profileList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const menuLinks = document.querySelectorAll('.menu');
const homeLinks = document.querySelectorAll('.active');

//setup profile
const setupProfile = (data) => {

  let html = '';
  data.forEach(doc => {
    const profile = doc.data();
    const li = `
      <li>
      <a href="#"> ${profile.FirstName}  ${profile.LastName} <br> ${profile.Role}  ${profile.Region} <br> ${profile.Email}   ${profile.CellNum}   
      <br> <br> ${profile.Notes}
      </a>
      </li>
      
    `;
    html += li
  });


  profileList.innerHTML = html;
}


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