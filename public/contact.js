
//form submit listner
document.getElementById('Contactform').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();
    //values
    var name = getValue('Name');
    var surname = getValue('Surname');
    var email = getValue('Email');
    var subject = getValue('Subject');
    var message = getValue('Message');
    
    //calling of function to save comment
    saveComment(name, surname, email, subject, message);
    document.getElementById('Contactform').reset();
}

//get form values
function getValue(id){
    return document.getElementById(id).value;
} 
// save message to firebase
function saveComment(name, surname, email, subject, message){
    db.collection("messages").add({
        name: name,
        surname: surname,
        email: email,
        subject: subject,
        message: message

    });
}