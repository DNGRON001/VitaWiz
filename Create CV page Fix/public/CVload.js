var refresher
document.addEventListener("DOMContentLoaded", letsgo());
function letsgo() {
    refresher = setInterval(TheUpdate, 1000);
}
function TheUpdate() {
    var aboutmeSec = document.getElementById("AboutMePara");
    var ProfileName = document.getElementById("ProfileName");
    var ProfileRegion = document.getElementById("theRegion");
    var ProfilePhone = document.getElementById("PhoneNum");
    var ProfileEmail = document.getElementById("EmailAddress");
    var inputStore = '';
    var PNAme = '';
    var PSurname = '';
    var PPhone = '';
    var PArea = '';
    var PEmail = '';
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").get().then(function (doc) {
        inputStore = doc.data().AboutMe;
        PNAme = doc.data().Name;
        PSurname = doc.data().Surname;
        PPhone = doc.data().Phone;
        PArea = doc.data().Region;
        PEmail = doc.data().Email;
        aboutmeSec.innerHTML = inputStore;
        ProfileName.innerHTML = PNAme + " " + PSurname;
        ProfilePhone.innerHTML = PPhone;
        ProfileRegion.innerHTML = PArea;
        ProfileEmail.innerHTML = PEmail;
    });
    var ProfileImgRef = storage.ref();
    ProfileImgRef.child('users/sDHiAGDFbrVjC6wO2RhwxD0HGEC2/profile.png').getDownloadURL().then(function (url) {
        var placeholder = document.getElementById('thePlaceHolder');
        placeholder.src = url;
    });
    // for jobs
    var jobCounter = 0;
    var DateStem = "JDate";
    var jobTitleStem = "JobTitle";
    var CompanyStem = "Company";

    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentEXP").where("addToCV", "==", true).get().then(function (querySnapshot) {
        if (querySnapshot.empty == false) {
            querySnapshot.forEach(function (doc) {
                jobCounter++;
                var Jobtitle = document.getElementById(jobTitleStem + jobCounter);
                var Organisation = document.getElementById(CompanyStem + jobCounter);
                var Years = document.getElementById(DateStem + jobCounter);
                Jobtitle.innerHTML = doc.data().JobTitle;
                Organisation.innerHTML = doc.data().Organisation;
                Years.innerHTML = doc.data().years;
            });
        } else {
            jobCounter = 1;
            var Jobtitle = document.getElementById(jobTitleStem + jobCounter);
            var Organisation = document.getElementById(CompanyStem + jobCounter);
            var Years = document.getElementById(DateStem + jobCounter);
            Jobtitle.innerHTML = "";
            Organisation.innerHTML = "";
            Years.innerHTML = "";
        }
    });
    //for education
    var educationCounter = 0;
    var dateStem = "Edate";
    var EducationStem = "ETitle";
    var GradeStem = "Grade";
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").where("addToCV", "==", true).get().then(function (querySnapshot) {
        if (querySnapshot.empty == false) {
            querySnapshot.forEach(function (doc) {
                educationCounter++;
                var EDtitle = document.getElementById(EducationStem + educationCounter);
                var EGrade = document.getElementById(GradeStem + educationCounter);
                var EYears = document.getElementById(dateStem + educationCounter);
                EDtitle.innerHTML = doc.data().schholName;
                EGrade.innerHTML = doc.data().grade;
                EYears.innerHTML = doc.data().years;
            });
        } else {
            while (educationCounter <= 3) {
                educationCounter++;
                var EDtitle = document.getElementById(EducationStem + educationCounter);
                var EGrade = document.getElementById(GradeStem + educationCounter);
                var EYears = document.getElementById(dateStem + educationCounter);
                EDtitle.innerHTML = "";
                EGrade.innerHTML = "";
                EYears.innerHTML = "";


            }

        }
    });
    // for Documentation
    var DocumentationCounter = 0;
    var DDateStem = "Ddate";
    var DDName = "DTitle";
    var DDiscription = "DGrade";
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").where("addToCV", "==", true).get().then(function (querySnapshot) {
        if (querySnapshot.empty == false) {
            querySnapshot.forEach(function (doc) {
                DocumentationCounter++;
                var DDtitle = document.getElementById(DDName + DocumentationCounter);
                var DDGrade = document.getElementById(DDiscription + DocumentationCounter);
                var DDYears = document.getElementById(DDateStem + DocumentationCounter);
                DDtitle.innerHTML = doc.data().Name;
                DDGrade.innerHTML = doc.data().No;
                DDYears.innerHTML = doc.data().Yearz;
            });
        } else {
            while (DocumentationCounter <= 2) {
                DocumentationCounter++;
                var DDtitle = document.getElementById(DDName + DocumentationCounter);
                var DDGrade = document.getElementById(DDiscription + DocumentationCounter);
                var DDYears = document.getElementById(DDateStem + DocumentationCounter);
                DDtitle.innerHTML = "";
                DDGrade.innerHTML = "";
                DDYears.innerHTML = "";
            }
        }
    });
    //stop interval when saved
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Export").where("Exported", "==", true).get().then(function (querySnapshot) {
        if (querySnapshot.empty == false) {
            html2canvas(document.querySelector("#TheBigBody")).then(canvas => {
                var image = canvas.toDataURL("image/png");
                var doc = new jsPDF();
                doc.addImage(image, 'PNG', 0, 0);
                var StringURL = doc.output('dataurlstring');
                var storageRef = storage.ref();
                var CVRef = storageRef.child('users/sDHiAGDFbrVjC6wO2RhwxD0HGEC2/CV.pdf');
                CVRef.putString(StringURL, 'data_url').then(function(snapshot){
                    console.log('file uploaded');
                });

                //doc.save("CV.pdf");
            });
            clearInterval(refresher);
            return;
        }
    })
}