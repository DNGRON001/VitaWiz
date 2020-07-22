auth.onAuthStateChanged(user => {
  if (user) {
    setupUI(user);
  } else {
    setupUI();
  }


})


// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  if (document.getElementById('signup-password').value ==
    document.getElementById('confirm-password').value) {

      
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      // create jobseeker details
      db.collection("Jobseeker").doc(cred.user.uid).set({
        FirstName: document.getElementById("signup-Name").value,
        LastName:  document.getElementById("signup-Surname").value,
        CellNum:  document.getElementById("signup-Number").value,
        DOB:  document.getElementById("signup-DOB").value,
        Notes: "",
        Region: ""
      }).then(()=>{
        const modal = document.querySelector('#modalRegisterForm');
        /* M.Modal.getInstance(modal).close(); */
        $('#modalRegisterForm').modal('hide');
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
        //redirect to account using url with user ID
        var normUrl = 'https://vitawizjobseeker.web.app/#/profileTester';
        var userID = cred.user.uid;
        window.location= normUrl+"?id="+userID;
      });
      
    }).catch(err => {
      signupForm.querySelector('.error').innerHTML = err.message;
    });
    
    
  } else {
    alert("Passwords do not match.");
  }
  

});



// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();


  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modalLoginForm');
    /* M.Modal.getInstance(modal).close(); */
    $('#modalLoginForm').modal('hide');
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = '';
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });

});