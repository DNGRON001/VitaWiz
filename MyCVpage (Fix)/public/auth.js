auth.onAuthStateChanged(user => {
    if (user) {
      setupUI(user);
    }else {
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
      // close the signup modal & reset form
      const modal = document.querySelector('#modalRegisterForm');
      /* M.Modal.getInstance(modal).close(); */
      $('#modalRegisterForm').modal('hide');
      signupForm.reset();
      signupForm.querySelector('.error').innerHTML = ''
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
    window.location.replace("https://vitawiz.web.app/");
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