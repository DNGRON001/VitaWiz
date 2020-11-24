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

    if (profile.FirstName){
      var firstName = profile.FirstName;
    }else{
      var firstName = "";
    }
    if (profile.LastName){
      var lastName = profile.LastName;
    }else{
      var lastName = "";
    }
    if (profile.Role){
      var role = profile.Role;
    }else{
      var role = "";
    }
    if (profile.Region){
      var region = profile.Region;
    }else{
      var region = "";
    }
    if (profile.Email){
      var email = profile.Email;
    }else{
      var email = "";
    }
    if (profile.CellNum){
      var cell = profile.CellNum;
    }else{
      var cell = "";
    }
    if (profile.Notes){
      var notes = profile.Notes;
    }else{
      var notes = "";
    }

    const li = `
      <li>
      <a href="#"> ${firstName} ${lastName} <br> ${role}  ${region} <br> ${email}   ${cell}   
      <br> <br> ${notes}
      </a>
      </li>
      
    `;
    html += li
  });

  profileList.innerHTML = html;
}

function runCV(){

  var cvUrl = 'https://vitawizcreate.web.app';
  var user = firebase.auth().currentUser;
  var userID = user.uid;
  if (userID == "96ZxtI7s5lRtYAAYErbGVNKFwer2"){
    userID = "sDHiAGDFbrVjC6wO2RhwxD0HGEC2"
  }
  window.location = cvUrl +"?id="+userID;
 }
 
 function runAcc(){
   var normUrl = 'https://vitawizjobseeker.web.app/#/profileTester';
   var user = firebase.auth().currentUser;
     var userID = user.uid;
     if (userID == "96ZxtI7s5lRtYAAYErbGVNKFwer2"){
       userID = "sDHiAGDFbrVjC6wO2RhwxD0HGEC2"
     }
     window.location= normUrl+"?id="+userID;
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