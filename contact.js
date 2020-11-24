//form submit listner
document.getElementById('Contactform').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    //values
    var name = getValue('Name');
    var surname = getValue('Surname');
    var email = getValue('Email');
    var subject = getValue('Subject');
    var message = getValue('Message');
    if (name == '' || surname == '' || email == '' || subject == '' || message == '') {
        alert("Please complete all fields");
    } else {
        //calling of function to save comment
        saveComment(name, surname, email, subject, message);
        $('#ConfirmModal').modal('show');
        document.getElementById('Contactform').reset();
    }
    
}

//get form values
function getValue(id) {
    return document.getElementById(id).value;
}
// save message to firebase
function saveComment(name, surname, email, subject, message) {
    db.collection("messages").add({
        name: name,
        surname: surname,
        email: email,
        subject: subject,
        message: message

    });
}