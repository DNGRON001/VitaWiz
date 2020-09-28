//get data
db.collection('Jobseeker').get().then(snapshot => {
  setupProfile(snapshot.docs);
})


//status change
auth.onAuthStateChanged(user => {
  if (user) {
    setupUI(user);
  } else {
    setupUI();
  }
})

function formatDate(string) {
  var options = { day: 'numeric', month: 'long', year: 'numeric' };

  if (string == "") {
      string = "01 February 2000"
  }

  return new Date(string).toLocaleDateString([], options);
}


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

      db.collection("Jobseeker").doc(cred.user.uid)
        .collection("BasicEducation").doc("BE1")
        .set({
            SchoolName: '',
            EnrolYear: formatDate('2005-08-24'),
            LeavingYear: formatDate('2005-08-24'),
            HGP: '',
            MathType: '',
            Stream: '',
            AvgMark: ''
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("HigherEducation").doc("HE1")
        .set({
            Institution: '',
            EnrolYear: formatDate('2005-08-24'),
            LeavingYear: formatDate('2005-08-24'),
            CertType: '',
            HEPName: '',
            HEPDescription: '',
            AvgMark: ''
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("Travel").doc("T1")
        .set({
            PassNo: '',
            PassType: '',
            DateIssued: formatDate('2005-08-24'),
            DateExpire: formatDate('2005-08-24')
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("Driving").doc("D1")
        .set({
            LicNo: '',
            LicCode: '',
            LicType: '',
            PDP: '',
            DateIssued: formatDate('2005-08-24'),
            DateExpire: formatDate('2005-08-24')
        })

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("FirstAid").doc("FA1")
        .set({
            CertNo: '',
            Institution: '',
            FALevel: '',
            DateIssued: formatDate('2005-08-24'),
            DateExpired: formatDate('2005-08-24'),
        })

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("Jobs").doc("J1")
        .set({
            OrgName: '',
            OrgType: '',
            JobTitle: '',
            JobDescription: '',
            DateStarted: formatDate('2005-08-24'),
            DateEnded: formatDate('2005-08-24'),
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("ComServ").doc("CS1")
        .set({
            OrgName: '',
            Reason: '',
            RoleDescription: '',
            DateStarted: formatDate('2005-08-24'),
            DateCompleted: formatDate('2005-08-24')
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("Projects").doc("P1")
        .set({
            ProjectName: '',
            RoleDescription: '',
            DateStarted: formatDate('2005-08-24'),
            DateCompleted: formatDate('2005-08-24'),
        });

    db.collection("Jobseeker").doc(cred.user.uid)
        .collection("Referees").doc("R1")
        .set({
            RefName: '',
            Relation: '',
            Email: '',
            Phone: '',
        });
      

      // create jobseeker details
      db.collection("Jobseeker").doc(cred.user.uid).set({
        FirstName: document.getElementById("signup-Name").value,
        LastName:  document.getElementById("signup-Surname").value,
        CellNum:  document.getElementById("signup-Number").value,
        DOB:  document.getElementById("signup-DOB").value,
        Notes: "",
        Region: "",
        Public: ""
      }).then(()=>{

      var storageRef = firebase.storage().ref("user");
      var userRef = storageRef.child(cred.user.uid);

      //sendLink    
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
        
        // close the signup modal & reset form
        const modal = document.querySelector('#modalRegisterForm');
        $('#modalRegisterForm').modal('hide');
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = ''
        auth.signOut();
        
        alert("Please check your email and follow the link to complete the verification process.");
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

    //redirect to account using url with user ID
    var normUrl = 'https://vitawizjobseeker.web.app/#/profileTester';
    var userID = cred.user.uid;
    window.location= normUrl+"?id="+userID;

  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });

});