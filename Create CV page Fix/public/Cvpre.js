let canvas, ctx, f, oldTxt;

document.getElementById("MSForm").addEventListener('submit',mod)
function mod(e) {
    e.preventDefault();
}

window.addEventListener('load', (ev)=>{
    
   /*  canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 400; */
    //function that types on the canvas
   /*  TypeDoc(); */
    AddBasicEducation();
    AddHigerEducation();
    AddDriving();
    AddFirstAid();
    AddTravel();
    AddJobs();
    AddComServ();
    /* document.getElementById('Name').addEventListener('input',TypeDoc) */
    displayInfodata();
    Screenshots()
    /* document.getElementById('Surname').addEventListener('input',TypeDoc1) */
   
    //allows the canvas to type what ever is being typed in the text boxes
   /*  getValue('Name').addEventListener('input', TypeDoc());
    getValue('Surname').addEventListener('input', TypeDoc('Surname'));
    getValue('City').addEventListener('input', TypeDoc('City'));
    getValue('Province').addEventListener('input', TypeDoc('Province'));
    getValue('Phone').addEventListener('input', TypeDoc('Phone'));
    getValue('Email').addEventListener('input', TypeDoc('Email'));  */

})
//add screenshot update
function Screenshots(){
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Export").doc("status").set({
        Exported : false
    });
}
//add community engagement
function AddComServ(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("ComServ").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            // add to form the headings
            var container = document.getElementById("Job");
            //<Table>
            var newTable = document.createElement("table");
            newTable.setAttribute("class", "table table-sm table-hover");
            container.appendChild(newTable);
            //<thead>
            var Heading = document.createElement("thead");
            newTable.appendChild(Heading);
            //<tr>
            var HeadElement = document.createElement("tr");
            Heading.appendChild(HeadElement);
            //<th> basic ed
            var tableCol = document.createElement("th");
            tableCol.setAttribute("scope","col");
            var BEText = document.createTextNode("Community Service");
            tableCol.appendChild(BEText);
            HeadElement.appendChild(tableCol);
            //<th> add to CV
            var TableCol2 = document.createElement("th");
            TableCol2.setAttribute("scope","col");
            var BEText2 = document.createTextNode("Add to CV");
            TableCol2.appendChild(BEText2);
            HeadElement.appendChild(TableCol2);
            //create table body<tbody>
            var TableBody = document.createElement("tbody")
            TableBody.setAttribute("id","TableBodyCS");
            newTable.appendChild(TableBody);          
            //for loop to add the elements
            for (let index = 1; index <= numDoc; index++) {
                createComServ(index); 
            }
        }
         // add button
         var addbutton = document.createElement("button");
         addbutton.setAttribute("id", "AddBEButton");
         addbutton.setAttribute("class","btn btn-primary");
         addbutton.setAttribute("diasbled","true");
         var ButtonText = document.createTextNode("Add");
         addbutton.appendChild(ButtonText);
         //addbutton.setAttribute("onclick","addBE()");
         container.appendChild(addbutton);
    });
}
//add jobs
function AddJobs(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Jobs").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            // add to form the headings
            var container = document.getElementById("Job");
            //<Table>
            var newTable = document.createElement("table");
            newTable.setAttribute("class", "table table-sm table-hover");
            container.appendChild(newTable);
            //<thead>
            var Heading = document.createElement("thead");
            newTable.appendChild(Heading);
            //<tr>
            var HeadElement = document.createElement("tr");
            Heading.appendChild(HeadElement);
            //<th> basic ed
            var tableCol = document.createElement("th");
            tableCol.setAttribute("scope","col");
            var BEText = document.createTextNode("Job(s)");
            tableCol.appendChild(BEText);
            HeadElement.appendChild(tableCol);
            //<th> add to CV
            var TableCol2 = document.createElement("th");
            TableCol2.setAttribute("scope","col");
            var BEText2 = document.createTextNode("Add to CV");
            TableCol2.appendChild(BEText2);
            HeadElement.appendChild(TableCol2);
            //create table body<tbody>
            var TableBody = document.createElement("tbody")
            TableBody.setAttribute("id","TableBodyJ");
            newTable.appendChild(TableBody);          
            //for loop to add the elements
            for (let index = 1; index <= numDoc; index++) {
                createJob(index); 
            }
        }
        // add button
        var addbutton = document.createElement("button");
        addbutton.setAttribute("id", "AddBEButton");
        addbutton.setAttribute("class","btn btn-primary");
        addbutton.setAttribute("disabled","true");
        var ButtonText = document.createTextNode("Add");
        addbutton.appendChild(ButtonText);
        //addbutton.setAttribute("onclick","addBE()");
        container.appendChild(addbutton);
        //break
        var breaks = document.createElement("br");
        var breaks2 = document.createElement("br");
        container.appendChild(breaks);
        container.appendChild(breaks2);
    });
}
//function to add certificates
function AddDriving(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Driving").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            // add to form the headings
            var container = document.getElementById("Certi");
            //<Table>
            var newTable = document.createElement("table");
            newTable.setAttribute("class", "table table-sm table-hover");
            container.appendChild(newTable);
            //<thead>
            var Heading = document.createElement("thead");
            newTable.appendChild(Heading);
            //<tr>
            var HeadElement = document.createElement("tr");
            Heading.appendChild(HeadElement);
            //<th> basic ed
            var tableCol = document.createElement("th");
            tableCol.setAttribute("scope","col");
            var BEText = document.createTextNode("Certifications and Documents");
            tableCol.appendChild(BEText);
            HeadElement.appendChild(tableCol);
            //<th> add to CV
            var TableCol2 = document.createElement("th");
            TableCol2.setAttribute("scope","col");
            var BEText2 = document.createTextNode("Add to CV");
            TableCol2.appendChild(BEText2);
            HeadElement.appendChild(TableCol2);
            //create table body<tbody>
            var TableBody = document.createElement("tbody")
            TableBody.setAttribute("id","TableBodyD");
            newTable.appendChild(TableBody);          
            //for loop to add the elements
            for (let index = 1; index <= numDoc; index++) {
                createDriving(index); 
            }
        }
        // add button
        var addbutton = document.createElement("button");
        addbutton.setAttribute("id", "AddBEButton");
        addbutton.setAttribute("class","btn btn-primary");
        addbutton.setAttribute("disabled","true");
        var ButtonText = document.createTextNode("Add");
        addbutton.appendChild(ButtonText);
        //addbutton.setAttribute("onclick","addBE()");
        container.appendChild(addbutton);
    });
}
function AddFirstAid(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Driving").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            for (let index = 1; index <= numDoc; index++) {
                createFA(index); 
            }
        }
    });
}
function AddTravel(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Travel").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            for (let index = 1; index <= numDoc; index++) {
                createTravel(index); 
            }
        }
    });
}
// function to query how many basic education fields
function AddBasicEducation(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("BasicEducation").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            // add to form the headings
            var container = document.getElementById("Qual");
            //<Table>
            var newTable = document.createElement("table");
            newTable.setAttribute("class", "table table-sm table-hover");
            container.appendChild(newTable);
            //<thead>
            var Heading = document.createElement("thead");
            newTable.appendChild(Heading);
            //<tr>
            var HeadElement = document.createElement("tr");
            Heading.appendChild(HeadElement);
            //<th> basic ed
            var tableCol = document.createElement("th");
            tableCol.setAttribute("scope","col");
            var BEText = document.createTextNode("Basic Education");
            tableCol.appendChild(BEText);
            HeadElement.appendChild(tableCol);
            //<th> add to CV
            var TableCol2 = document.createElement("th");
            TableCol2.setAttribute("scope","col");
            var BEText2 = document.createTextNode("Add to CV");
            TableCol2.appendChild(BEText2);
            HeadElement.appendChild(TableCol2);
            //create table body<tbody>
            var TableBody = document.createElement("tbody")
            TableBody.setAttribute("id","TableBody");
            newTable.appendChild(TableBody);          
            //for loop to add the elements
            for (let index = 1; index <= numDoc; index++) {
                createExistingBE(index); 
            }
        }
        // add button
        var addbutton = document.createElement("button");
        addbutton.setAttribute("id", "AddBEButton");
        addbutton.setAttribute("class","btn btn-primary");
        addbutton.setAttribute("onclick", "QualBedModal()")
        var ButtonText = document.createTextNode("Add");
        addbutton.appendChild(ButtonText);
        //addbutton.setAttribute("onclick","addBE()");
        container.appendChild(addbutton);
        //break
        var breaks = document.createElement("br");
        var breaks2 = document.createElement("br");
        container.appendChild(breaks);
        container.appendChild(breaks2);

    });
}
//function to show add basic education modal
function QualBedModal() {
    $('#BasicEdModal').modal('show');
}
//function to add qual to wizard
function addBasicEd() {
    var container = document.getElementById("TableBody");
    //add details
    //first row <tr>
    var FirstRow = document.createElement("tr");
    FirstRow.setAttribute("id","FirstRow");
    container.appendChild(FirstRow);
    //column 1 <td>
    var col1 = document.createElement("td");
        //inside the col create table
    var NestedTable = document.createElement("table");
    NestedTable.setAttribute("class","table table-sm table-borderless");
    col1.appendChild(NestedTable);
        //add 3 rows with 1 column
        //row 1
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id","SchoolNamed");
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
        //row2
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id","Graded");
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
        //row3
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id","Yearsd");
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
    //add col 1 to first row
    FirstRow.appendChild(col1);
    // and the check box to new col
    var col2 = document.createElement("td");
    var Checkbox = document.createElement("input");
    Checkbox.setAttribute("type","checkbox");
    Checkbox.setAttribute("class","form-check-input");
    Checkbox.setAttribute("onclick","ChangeAddtoCV(3)");
    Checkbox.setAttribute("id","DynamicCheckBox");
    col2.appendChild(Checkbox);
    FirstRow.appendChild(col2);
    //now to get data from databse and add
    //add education
    //first store values
    var SchoolName = document.getElementById("SchoolNameMod").value;
    var HGP = document.getElementById("HGPMod").value;
    var yearStarted = document.getElementById("YearenrolMod").value;
    var yearFinished = document.getElementById("YearMod").value;
    //minipulate values and them to table
    var yearstartStore = yearStarted.toString();
    var yearFinishedStore = yearFinished.toString();
    var yearstartarray = yearstartStore.split("-");
    var yearFinArray = yearFinishedStore.split("-");
    var yearstartFinal = yearstartarray[0]; 
    var yearFinishFinal = yearFinArray[0]; 
      
    //add the info to column
    document.getElementById('SchoolNamed').innerHTML = SchoolName;
    document.getElementById("Graded").innerHTML = HGP;
    document.getElementById('Yearsd').innerHTML = yearstartFinal+"-"+yearFinishFinal; 
    var theSchoolName = SchoolName;
    var theGrade = HGP;
    var CompleteYears = yearstartFinal+"-"+yearFinishFinal;
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc("BE3").set({
        schholName: theSchoolName,
        grade:theGrade,
        years:CompleteYears,
        addToCV: false
    });
    //close model
    $('#BasicEdModal').modal('hide');
    
}
//function to check add to cv
function ChangeAddtoCV(n) {
    var TheDoc = "BE3"
    var checkBox = getValue("DynamicCheckBox");
    if (checkBox.checked == true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: true
        });
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: false
        });
    }
}
// function to add Higher Education
function AddHigerEducation(){
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("HigherEducation").get().then(function(snapshot){
        var numDoc = snapshot.size;
        if (snapshot.empty == false) {
            // add to form the headings
            var container = document.getElementById("Qual");
            //<Table>
            var newTable = document.createElement("table");
            newTable.setAttribute("class", "table table-sm table-hover");
            container.appendChild(newTable);
            //<thead>
            var Heading = document.createElement("thead");
            newTable.appendChild(Heading);
            //<tr>
            var HeadElement = document.createElement("tr");
            Heading.appendChild(HeadElement);
            //<th> basic ed
            var tableCol = document.createElement("th");
            tableCol.setAttribute("scope","col");
            var BEText = document.createTextNode("Higher Education");
            tableCol.appendChild(BEText);
            HeadElement.appendChild(tableCol);
            //<th> add to CV
            var TableCol2 = document.createElement("th");
            TableCol2.setAttribute("scope","col");
            var BEText2 = document.createTextNode("Add to CV");
            TableCol2.appendChild(BEText2);
            HeadElement.appendChild(TableCol2);
            //create table body<tbody>
            var TableBody = document.createElement("tbody")
            TableBody.setAttribute("id","TableBodyHigh");
            newTable.appendChild(TableBody);          
            //for loop to add the elements
            for (let index = 1; index <= numDoc; index++) {
                createExistingHE(index); 
            }
        }
        // add button
        var addbutton = document.createElement("button");
        addbutton.setAttribute("id", "AddBEButton");
        addbutton.setAttribute("class","btn btn-primary");
        addbutton.setAttribute("disabled","true");
        var ButtonText = document.createTextNode("Add");
        addbutton.appendChild(ButtonText);
        //addbutton.setAttribute("onclick","addBE()");
        container.appendChild(addbutton);
        
    });
}
//driving liscence
function createDriving(n) {
    // keeptrack of id's in the nested table
    var SchoolNameNest = "Liscence"+ n.toString();
    var GradeNest = "Code"+ n.toString();
    var YearsNest = "Datevalid"+ n.toString();
     //check box id
     /* var CheckBoxID = "Check"+n.toString(); */
     //get correct document
     var Doc = "D"+n.toString();
     var TableBody1 = document.getElementById("TableBodyD");
     //first row <tr>
     var FirstRow = document.createElement("tr");
     FirstRow.setAttribute("id","FirstRow");
     TableBody1.appendChild(FirstRow);
     //column 1 <td>
     var col1 = document.createElement("td");
         //inside the col create table
     var NestedTable = document.createElement("table");
     NestedTable.setAttribute("class","table table-sm table-borderless");
     col1.appendChild(NestedTable);
         //add 3 rows with 1 column
         //row 1
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",SchoolNameNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row2
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",GradeNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row3
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",YearsNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
     //add col 1 to first row
     FirstRow.appendChild(col1);
     // and the check box to new col
     var col2 = document.createElement("td");
     var Checkbox = document.createElement("input");
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("onclick","DrivingAddtoCV("+n+")");
     Checkbox.setAttribute("class","form-check-input");
     Checkbox.setAttribute("id","CheckBoxD"+n);
     col2.appendChild(Checkbox);
     FirstRow.appendChild(col2);
     //now to get data from databse and add
     //add education
     var SchoolName = '';
     var HGP = '';
     var yearStarted = '';
     var yearFinished = '';
     db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Driving").doc(Doc).get().then(function(doc){
         SchoolName = doc.data().LicType;
         HGP += doc.data().LicCode;
         var yearStartedStore = doc.data().DateIssued;
         var yearFinishedStore = doc.data().DateExpire;
         var yearStartedStoreArray = yearStartedStore.split("/");
         yearStarted += yearStartedStoreArray[0];
         var yearFinishedStoreArray = yearFinishedStore.split("/");
         yearFinished += yearFinishedStoreArray[0];
         //add the info to column
         document.getElementById(SchoolNameNest).innerHTML = SchoolName + " License" ;
         document.getElementById(GradeNest).innerHTML = "code "+ HGP;
         document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished; 
         var type = SchoolName + " License";
         var Code = "code "+ HGP;
         var expiration = yearStarted+"-"+yearFinished;
         Driving2CV(type, Code, expiration, Doc);  
     });
     //add the info to column
 
 }
 //add license to CV
 function Driving2CV(name, code, years, numberOf) {
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(numberOf).set({
        Name: name,
        No:code,
        Yearz:years,
        addToCV: false
    });
  
 }
 //check license to CV
 function DrivingAddtoCV(n) {
    var TheDoc = "D"+ n;
    var checkboxID = "CheckBoxD"+n;
    var checkbox = document.getElementById(checkboxID);
    if (checkbox.checked == true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(TheDoc).update({
            addToCV: true
        });
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(TheDoc).update({
            addToCV: false
        });
    }
 }
 //create firstAid
 function createFA(n) {
    // keeptrack of id's in the nested table
    var SchoolNameNest = "FALevel"+ n.toString();
    var GradeNest = "Institution"+ n.toString();
    var YearsNest = "DatevalidFA"+ n.toString();
     //check box id
     var CheckBoxID = "Check"+n.toString();
     //get correct document
     var Doc = "FA"+n.toString();
     var TableBody1 = document.getElementById("TableBodyD");
     //first row <tr>
     var FirstRow = document.createElement("tr");
     FirstRow.setAttribute("id","FirstRow");
     TableBody1.appendChild(FirstRow);
     //column 1 <td>
     var col1 = document.createElement("td");
         //inside the col create table
     var NestedTable = document.createElement("table");
     NestedTable.setAttribute("class","table table-sm table-borderless");
     col1.appendChild(NestedTable);
         //add 3 rows with 1 column
         //row 1
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",SchoolNameNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row2
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",GradeNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row3
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",YearsNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
     //add col 1 to first row
     FirstRow.appendChild(col1);
     // and the check box to new col
     var col2 = document.createElement("td");
     var Checkbox = document.createElement("input");
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("class","form-check-input");
     Checkbox.setAttribute("id",CheckBoxID);
     col2.appendChild(Checkbox);
     FirstRow.appendChild(col2);
     //now to get data from databse and add
     //add education
     var SchoolName = '';
     var HGP = '';
     var yearStarted = '';
     var yearFinished = '';
     db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("FirstAid").doc(Doc).get().then(function(doc){
         SchoolName = doc.data().FALevel;
         HGP += doc.data().Institution;
         var yearStartedStore = doc.data().DateIssued;
         var yearFinishedStore = doc.data().DateExpired;
         var yearStartedStoreArray = yearStartedStore.split("/");
         yearStarted += yearStartedStoreArray[0];
         var yearFinishedStoreArray = yearFinishedStore.split("/");
         yearFinished += yearFinishedStoreArray[0];
         //add the info to column
         document.getElementById(SchoolNameNest).innerHTML = "First Aid "+ SchoolName;
         document.getElementById(GradeNest).innerHTML = HGP;
         document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished;  
     });
     //add the info to column
 
 }
 //comunity service create
 function createComServ(n) {
    // keeptrack of id's in the nested table
    var SchoolNameNest = "Organisations"+ n.toString();
    var GradeNest = "Reason"+ n.toString();
    var YearsNest = "YearsCom"+ n.toString();
     //check box id
     var CheckBoxID = "Check"+n.toString();
     //get correct document
     var Doc = "CS"+n.toString();
     var TableBody1 = document.getElementById("TableBodyCS");
     //first row <tr>
     var FirstRow = document.createElement("tr");
     FirstRow.setAttribute("id","FirstRow");
     TableBody1.appendChild(FirstRow);
     //column 1 <td>
     var col1 = document.createElement("td");
         //inside the col create table
     var NestedTable = document.createElement("table");
     NestedTable.setAttribute("class","table table-sm table-borderless");
     col1.appendChild(NestedTable);
         //add 3 rows with 1 column
         //row 1
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",SchoolNameNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row2
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",GradeNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row3
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",YearsNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
     //add col 1 to first row
     FirstRow.appendChild(col1);
     // and the check box to new col
     var col2 = document.createElement("td");
     var Checkbox = document.createElement("input");
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("class","form-check-input");
     Checkbox.setAttribute("id",CheckBoxID);
     col2.appendChild(Checkbox);
     FirstRow.appendChild(col2);
     //now to get data from databse and add
     //add education
     var SchoolName = '';
     var HGP = '';
     var yearStarted = '';
     var yearFinished = '';
     db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("ComServ").doc(Doc).get().then(function(doc){
         SchoolName = doc.data().OrgName;
         HGP = doc.data().Reason;
         var yearStartedStore = doc.data().DateStarted;
         var yearFinishedStore = doc.data().DateCompleted;
         var yearStartedStoreArray = yearStartedStore.split("/");
         yearStarted = yearStartedStoreArray[0];
         var yearFinishedStoreArray = yearFinishedStore.split("/");
         yearFinished = yearFinishedStoreArray[0];
         //add the info to column
         document.getElementById(SchoolNameNest).innerHTML = SchoolName;
         document.getElementById(GradeNest).innerHTML = HGP;
         document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished;  
     });
     //add the info to column
 
 }
 //Travel Documents
 function createTravel(n) {
    // keeptrack of id's in the nested table
    var SchoolNameNest = "PassType"+ n.toString();
    var GradeNest = "PassNO"+ n.toString();
    var YearsNest = "DateLasting"+ n.toString();
     //check box id
     /* var CheckBoxID = "Check"+n.toString(); */
     //get correct document
     var Doc = "T"+n.toString();
     var TableBody1 = document.getElementById("TableBodyD");
     //first row <tr>
     var FirstRow = document.createElement("tr");
     FirstRow.setAttribute("id","FirstRow");
     TableBody1.appendChild(FirstRow);
     //column 1 <td>
     var col1 = document.createElement("td");
         //inside the col create table
     var NestedTable = document.createElement("table");
     NestedTable.setAttribute("class","table table-sm table-borderless");
     col1.appendChild(NestedTable);
         //add 3 rows with 1 column
         //row 1
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",SchoolNameNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row2
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",GradeNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row3
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",YearsNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
     //add col 1 to first row
     FirstRow.appendChild(col1);
     // and the check box to new col
     var col2 = document.createElement("td");
     var Checkbox = document.createElement("input");
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("onclick","TravelAddtoCV("+n+")");
     Checkbox.setAttribute("class","form-check-input");
     Checkbox.setAttribute("id","CheckboxTravel"+n);
     col2.appendChild(Checkbox);
     FirstRow.appendChild(col2);
     //now to get data from databse and add
     //add education
     var SchoolName = '';
     var HGP = '';
     var yearStarted = '';
     var yearFinished = '';
     db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Travel").doc(Doc).get().then(function(doc){
         SchoolName = doc.data().PassType;
         HGP = doc.data().PassNo;
         var yearStartedStore = doc.data().DateIssued;
         var yearFinishedStore = doc.data().DateExpire;
         var yearStartedStoreArray = yearStartedStore.split("/");
         yearStarted = yearStartedStoreArray[0];
         var yearFinishedStoreArray = yearFinishedStore.split("/");
         yearFinished = yearFinishedStoreArray[0];
         //add the info to column
         document.getElementById(SchoolNameNest).innerHTML = SchoolName+ " Passport";
         document.getElementById(GradeNest).innerHTML = "Passport Number: "+ HGP;
         document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished; 
         var passportType = SchoolName+ " Passport";
         var passportnum = "Passport Number: "+ HGP
         var expiration =  yearStarted+"-"+yearFinished;
         Travel2CV(passportType, passportnum, expiration, Doc);
     });
     //add the info to column
 
 }
 //add travel(passport) to CV
 function Travel2CV(passName, passNo, Years, numberOf) {
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(numberOf).set({
        Name: passName,
        No:passNo,
        Yearz:Years,
        addToCV: false
    });

 }
 //check travel to cv docs
 function TravelAddtoCV(n) {
    var TheDoc = "T"+ n;
    var checkboxID = "CheckboxTravel"+n;
    var checkbox = document.getElementById(checkboxID);
    if (checkbox.checked == true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(TheDoc).update({
            addToCV: true
        });
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Documentation").doc(TheDoc).update({
            addToCV: false
        });
    }
 }
 //create jobs
 function createJob(n){
     // keeptrack of id's in the nested table
     var SchoolNameNest = "JobTitle"+ n.toString();
     var GradeNest = "Organisation"+ n.toString();
     var YearsNest = "yearz"+ n.toString();
      //check box id
      /* var CheckBoxID = "Check"+n.toString(); */
      //get correct document
      var Doc = "J"+n.toString();
      var TableBody1 = document.getElementById("TableBodyJ");
      //first row <tr>
      var FirstRow = document.createElement("tr");
      FirstRow.setAttribute("id","FirstRow");
      TableBody1.appendChild(FirstRow);
      //column 1 <td>
      var col1 = document.createElement("td");
          //inside the col create table
      var NestedTable = document.createElement("table");
      NestedTable.setAttribute("class","table table-sm table-borderless");
      col1.appendChild(NestedTable);
          //add 3 rows with 1 column
          //row 1
      var nestedRow = document.createElement("tr");
      var nestedcol = document.createElement("td");
      nestedcol.setAttribute("id",SchoolNameNest);
      nestedRow.appendChild(nestedcol);
      NestedTable.appendChild(nestedRow);
          //row2
      var nestedRow = document.createElement("tr");
      var nestedcol = document.createElement("td");
      nestedcol.setAttribute("id",GradeNest);
      nestedRow.appendChild(nestedcol);
      NestedTable.appendChild(nestedRow);
          //row3
      var nestedRow = document.createElement("tr");
      var nestedcol = document.createElement("td");
      nestedcol.setAttribute("id",YearsNest);
      nestedRow.appendChild(nestedcol);
      NestedTable.appendChild(nestedRow);
      //add col 1 to first row
      FirstRow.appendChild(col1);
      // and the check box to new col
      var col2 = document.createElement("td");
      var Checkbox = document.createElement("input");
      Checkbox.setAttribute("type","checkbox");
      Checkbox.setAttribute("class","form-check-input");
      Checkbox.setAttribute("id","CheckBoxjob"+n);
      Checkbox.setAttribute("onclick","JobAddtoCV("+n+")");
      col2.appendChild(Checkbox);
      FirstRow.appendChild(col2);
      //now to get data from databse and add
      //add education
      var SchoolName = '';
      var HGP = '';
      var yearStarted = '';
      var yearFinished = '';
      db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("Jobs").doc(Doc).get().then(function(doc){
          SchoolName = doc.data().JobTitle;
          HGP = doc.data().OrgName;
          var yearStartedStore = doc.data().DateEnded;
          var yearFinishedStore = doc.data().DateStarted;
          var yearStartedStoreArray = yearStartedStore.split("/");
          yearStarted = yearStartedStoreArray[0];
          var yearFinishedStoreArray = yearFinishedStore.split("/");
          yearFinished = yearFinishedStoreArray[0];
          //add the info to column
          document.getElementById(SchoolNameNest).innerHTML = SchoolName;
          document.getElementById(GradeNest).innerHTML = HGP;
          document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished; 
          var completeYears = yearStarted+"-"+yearFinished;
          Jobs2CV(SchoolName, HGP, completeYears, Doc); 
      });
      //add the info to column
}
//Add jobs to the CV
function Jobs2CV(School, Grade, Years, numberOF) {
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentEXP").doc(numberOF).set({
        JobTitle: School,
        Organisation: Grade,
        years: Years,
        addToCV: false
    });
}
//check the job add to CV
function JobAddtoCV(n) {
    var TheDoc = "J"+ n;
    var checkboxID = "CheckBoxjob"+n;
    var checkbox = document.getElementById(checkboxID);
    if (checkbox.checked == true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentEXP").doc(TheDoc).update({
            addToCV: true
        });
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentEXP").doc(TheDoc).update({
            addToCV: false
        });
    }
   
}
//function to add user data
function UserDetail() {
    var name = getValue("Name");
    var surname = getValue("Surname");
    var email = getValue("Email");
     
    
}
function createExistingBE(n) {
   // keeptrack of id's in the nested table
   var SchoolNameNest = "SchoolNameN"+ n.toString();
   var GradeNest = "Grade"+ n.toString();
   var YearsNest = "Years"+ n.toString();
    //check box id
    /* var CheckBoxID = "Check"+n.toString(); */
    //get correct document
    var Doc = "BE"+n.toString();
    var TableBody1 = document.getElementById("TableBody");
    //first row <tr>
    var FirstRow = document.createElement("tr");
    FirstRow.setAttribute("id","FirstRow");
    TableBody1.appendChild(FirstRow);
    //column 1 <td>
    var col1 = document.createElement("td");
        //inside the col create table
    var NestedTable = document.createElement("table");
    NestedTable.setAttribute("class","table table-sm table-borderless");
    col1.appendChild(NestedTable);
        //add 3 rows with 1 column
        //row 1
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id",SchoolNameNest);
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
        //row2
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id",GradeNest);
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
        //row3
    var nestedRow = document.createElement("tr");
    var nestedcol = document.createElement("td");
    nestedcol.setAttribute("id",YearsNest);
    nestedRow.appendChild(nestedcol);
    NestedTable.appendChild(nestedRow);
    //add col 1 to first row
    FirstRow.appendChild(col1);
    // and the check box to new col
    var col2 = document.createElement("td");
    var Checkbox = document.createElement("input");
    Checkbox.setAttribute("type","checkbox");
    Checkbox.setAttribute("ID","CheckBoxBe"+n);
    Checkbox.setAttribute("class","form-check-input");
    Checkbox.setAttribute("onclick","BEAddtoCV("+n+")");
    col2.appendChild(Checkbox);
    FirstRow.appendChild(col2);
    //now to get data from databse and add
    //add education
    var SchoolName = '';
    var HGP = '';
    var yearStarted = '';
    var yearFinished = '';
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("BasicEducation").doc(Doc).get().then(function(doc){
        SchoolName += doc.data().SchoolName;
        HGP += doc.data().HGP;
        var yearStartedStore = doc.data().EnrolYear;
        var yearFinishedStore = doc.data().LeavingYear;
        var yearStartedStoreArray = yearStartedStore.split("/");
        yearStarted += yearStartedStoreArray[0];
        var yearFinishedStoreArray = yearFinishedStore.split("/");
        yearFinished += yearFinishedStoreArray[0];
        //add the info to column
        document.getElementById(SchoolNameNest).innerHTML = SchoolName;
        document.getElementById(GradeNest).innerHTML = HGP;
        document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished; 
        var completeYears = yearStarted+"-"+yearFinished;
        BasicEd2CV(SchoolName, HGP, completeYears, Doc);
    });
    //add the info to column

}

//add basic education to CV doc
function BasicEd2CV(School, Grade, Years, numberOF) {
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(numberOF).set({
        schholName: School,
        grade: Grade,
        years: Years,
        addToCV: false
    });
}
//check the BE to CV
function BEAddtoCV(n) {
    var TheDoc = "BE"+ n;
    var checkboxID = "CheckBoxBe"+n;
    var Checkbox = document.getElementById(checkboxID);
    if (Checkbox.checked==true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: true
        });
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: false
        });
    };
}
function createExistingHE(n) {
    // keeptrack of id's in the nested table
    var SchoolNameNest = "SchoolNameH"+ n.toString();
    var GradeNest = "GradeH"+ n.toString();
    var YearsNest = "YearsH"+ n.toString();
     //check box id
/*      var CheckBoxID = "Check"+n.toString();
 */     //get correct document
     var Doc = "HE"+n.toString();
     var TableBody1 = document.getElementById("TableBodyHigh");
     //first row <tr>
     var FirstRow = document.createElement("tr");
     FirstRow.setAttribute("id","FirstRow");
     TableBody1.appendChild(FirstRow);
     //column 1 <td>
     var col1 = document.createElement("td");
         //inside the col create table
     var NestedTable = document.createElement("table");
     NestedTable.setAttribute("class","table table-sm table-borderless");
     col1.appendChild(NestedTable);
         //add 3 rows with 1 column
         //row 1
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",SchoolNameNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row2
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",GradeNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
         //row3
     var nestedRow = document.createElement("tr");
     var nestedcol = document.createElement("td");
     nestedcol.setAttribute("id",YearsNest);
     nestedRow.appendChild(nestedcol);
     NestedTable.appendChild(nestedRow);
     //add col 1 to first row
     FirstRow.appendChild(col1);
     // and the check box to new col
     var col2 = document.createElement("td");
     var Checkbox = document.createElement("input");
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("ID","CheckBoxHe"+n)
     Checkbox.setAttribute("class","form-check-input");
     Checkbox.setAttribute("onclick","HEAddtoCV("+n+")");
     col2.appendChild(Checkbox);
     FirstRow.appendChild(col2);
     //now to get data from databse and add
     //add education
     var SchoolName = '';
     var HGP = '';
     var yearStarted = '';
     var yearFinished = '';
     db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("HigherEducation").doc(Doc).get().then(function(doc){
         SchoolName += doc.data().Institution;
         HGP += doc.data().HEPName;
         var yearStartedStore = doc.data().EnrolYear;
         var yearFinishedStore = doc.data().LeavingYear;
         var yearStartedStoreArray = yearStartedStore.split("/");
         yearStarted += yearStartedStoreArray[0];
         var yearFinishedStoreArray = yearFinishedStore.split("/");
         yearFinished += yearFinishedStoreArray[0];
         //add the info to column
         document.getElementById(SchoolNameNest).innerHTML = SchoolName;
         document.getElementById(GradeNest).innerHTML = HGP;
         document.getElementById(YearsNest).innerHTML = yearStarted+"-"+yearFinished; 
         var CompleteYears = yearStarted+"-"+yearFinished;
         HigherEd2CV(SchoolName, HGP, CompleteYears, Doc);
     });
     //add the info to column
 
 }
 //add higher education to CV
 function HigherEd2CV(School, Grade, Years, numberOF) {
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(numberOF).update({
        schholName: School,
        grade: Grade,
        years: Years,
        addToCV: false
    });
}
//add HD to cv via checked box
function HEAddtoCV(n){
    var TheDoc = "HE"+ n;
    var checkboxID = "CheckBoxHe"+ n;
    var CheckBox = document.getElementById(checkboxID);
    if (CheckBox.checked==true) {
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: true
        });  
    }else{
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("DocumentED").doc(TheDoc).update({
            addToCV: false
        }); 
    };
    
}
// function to add readable forms on load
function createcolLoad(n){
    //make row count 1
    var RowNumberString = n.toString();
    idString = "row"+ RowNumberString;
    btnnString = "removebutton"+RowNumberString;
    var schoolname = "SchoolName"+RowNumberString;
    var Qualification = "Qualification"+RowNumberString;
    var year = "Year"+RowNumberString;
//get the element you want to add the new inputs to
    var container = document.getElementById("Qual");
    //the new element
    var newRow = document.createElement("div");
    //set its attributes
    newRow.setAttribute("class", "row");
    newRow.setAttribute("id", idString);
    //add new row to the form slide
    container.appendChild(newRow);
    //
    //now create col to row
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelSchoolName = document.createElement("label");
    //its attributes
    labelSchoolName.setAttribute("for","SchoolName");
    //add text to it
    var text = document.createTextNode("School Name");
    labelSchoolName.appendChild(text);
    //add label to form
    var Schoolinput = document.createElement("input");
    //attributes
    Schoolinput.setAttribute("type","text");
    Schoolinput.setAttribute("name","SchoolName");
    Schoolinput.setAttribute("id",schoolname);
    Schoolinput.setAttribute("class","form-control");
    Schoolinput.setAttribute("placeholder","Enter School Name");
    //add input and label to col div
    col.appendChild(labelSchoolName);
    col.appendChild(Schoolinput);
    //
    //
    //create new col for qualification
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelQualification = document.createElement("label");
    //its attributes
    labelQualification.setAttribute("for","Qualification");
    //add text to it
    var textQ = document.createTextNode("Qualification");
    labelQualification.appendChild(textQ);
    //add label to form
    var Qualificationinput = document.createElement("input");
    //attributes
    Qualificationinput.setAttribute("type","text");
    Qualificationinput.setAttribute("name","Qualification");
    Qualificationinput.setAttribute("id",Qualification);
    Qualificationinput.setAttribute("class","form-control");
    Qualificationinput.setAttribute("placeholder","Enter Qualification");
    //add input and label to col div
    col.appendChild(labelQualification);
    col.appendChild(Qualificationinput);
    //
    //
    //create new col for Date
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelDate = document.createElement("label");
    //its attributes
    labelDate.setAttribute("for","Year");
    //add text to it
    var textQ = document.createTextNode("Year Obtained");
    labelDate.appendChild(textQ);
    //add label to form
    var Dateinput = document.createElement("input");
    //attributes
    Dateinput.setAttribute("type","date");
    Dateinput.setAttribute("name","Year");
    Dateinput.setAttribute("id",year);
    Dateinput.setAttribute("class","form-control");
    Dateinput.setAttribute("placeholder","Enter Date");
    //add input and label to col div
    col.appendChild(labelDate);
    col.appendChild(Dateinput);
    //
    //
    //add remove button
    //create new col for remove button
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //add button element
    var removeButton = document.createElement("button");
    //set its attributes
    removeButton.setAttribute("id","removeButton");
    removeButton.setAttribute("class","btn btn-secondary");
    removeButton.setAttribute("onclick","RemoveRow(idString)");
    //add text to button
    var butText = document.createTextNode("Remove");
    removeButton.appendChild(butText);
    //add button to col
    var brake = document.createElement("br");
    col.appendChild(brake);
    col.appendChild(removeButton);
    //
    //
    //create break for the rows
    container.appendChild(brake);  
}
//get data from firestore
async function displayInfodata(){
    //get id from html and set to variable
    var name = getValue("Name");
    var surname = getValue("Surname");
    var email = getValue("Email");
    var phonenum = getValue("Phone");
    var province = getValue("Province");
    var area = getValue("City")
    //get actual values
    db.collection("Jobseeker").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").get().then(function(doc){
    name.value = doc.data().FirstName;
    surname.value = doc.data().LastName;
    email.value = doc.data().Email; 
    phonenum.value = doc.data().CellNum;
    province.value = doc.data().DOB;
    area.value = doc.data().Region;
    AddContactInfo(name.value, surname.value, email.value, phonenum.value, province.value, area.value);

});    
}
//add contact information to cv data
async function AddContactInfo(name, surname, email, phone, dob, area) {
    var ContactName = name;
    var ContactSurname = surname;
    var ContactRegion = area;
    var ContactDOB = dob;
    var ContactPhone = phone;
    var ContactEmail = email;
    var aboutme = ' ';
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").set({
    Name: ContactName,
    Surname: ContactSurname,
    Region: ContactRegion,
    DOB: ContactDOB,
    Phone: ContactPhone,
    Email: ContactEmail,
    AboutMe: aboutme
});
};
//get each text box
function getValue (id){
    return document.getElementById(id);
}
function Dateleft(){
    /* var text = document.getElementById("DateLeft");
    var check = document.getElementById("dateCheck"); */
    if (document.getElementById("dateCheck").checked == true) {
        document.getElementById("DateLeft").setAttribute('disabled','disabled');
        
    } else{
        document.getElementById("DateLeft").removeAttribute('disabled');
    }
    
}
function triggerMod(x) {
    
}
//global variable to keep track of row count
var rowCount = 0;
var idString ="";
var btnnString ="";
//dynamically add fields to Qualification
function createcol1(){
    //make row count 1
    rowCount+= 1;
    var RowNumberString = rowCount.toString();
    idString = "row"+ RowNumberString;
    btnnString = "removebutton"+RowNumberString;
//get the element you want to add the new inputs to
    var container = document.getElementById("Qual");
    //the new element
    var newRow = document.createElement("div");
    //set its attributes
    newRow.setAttribute("class", "row");
    newRow.setAttribute("id", idString);
    //add new row to the form slide
    container.appendChild(newRow);
    //
    //now create col to row
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelSchoolName = document.createElement("label");
    //its attributes
    labelSchoolName.setAttribute("for","SchoolName");
    //add text to it
    var text = document.createTextNode("School Name");
    labelSchoolName.appendChild(text);
    //add label to form
    var Schoolinput = document.createElement("input");
    //attributes
    Schoolinput.setAttribute("type","text");
    Schoolinput.setAttribute("name","SchoolName");
    Schoolinput.setAttribute("id","SchoolName2");
    Schoolinput.setAttribute("class","form-control");
    Schoolinput.setAttribute("placeholder","Enter School Name");
    //add input and label to col div
    col.appendChild(labelSchoolName);
    col.appendChild(Schoolinput);
    //
    //
    //create new col for qualification
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelQualification = document.createElement("label");
    //its attributes
    labelQualification.setAttribute("for","Qualification");
    //add text to it
    var textQ = document.createTextNode("Qualification");
    labelQualification.appendChild(textQ);
    //add label to form
    var Qualificationinput = document.createElement("input");
    //attributes
    Qualificationinput.setAttribute("type","text");
    Qualificationinput.setAttribute("name","Qualification");
    Qualificationinput.setAttribute("id","Qualification2");
    Qualificationinput.setAttribute("class","form-control");
    Qualificationinput.setAttribute("placeholder","Enter Qualification");
    //add input and label to col div
    col.appendChild(labelQualification);
    col.appendChild(Qualificationinput);
    //
    //
    //create new col for Date
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //
    //and inputs to the col
    //label input
    var labelDate = document.createElement("label");
    //its attributes
    labelDate.setAttribute("for","Year");
    //add text to it
    var textQ = document.createTextNode("Year Obtained");
    labelDate.appendChild(textQ);
    //add label to form
    var Dateinput = document.createElement("input");
    //attributes
    Dateinput.setAttribute("type","date");
    Dateinput.setAttribute("name","Year");
    Dateinput.setAttribute("id","Year2");
    Dateinput.setAttribute("class","form-control");
    Dateinput.setAttribute("placeholder","Enter Date");
    //add input and label to col div
    col.appendChild(labelDate);
    col.appendChild(Dateinput);
    //
    //
    //add remove button
    //create new col for remove button
    var col = document.createElement("div");
    //set its attributes
    col.setAttribute("class","col");
    //add to the row
    newRow.appendChild(col);
    //add button element
    var removeButton = document.createElement("button");
    //set its attributes
    removeButton.setAttribute("id","removeButton");
    removeButton.setAttribute("class","btn btn-secondary");
    removeButton.setAttribute("onclick","RemoveRow(idString)");
    //add text to button
    var butText = document.createTextNode("Remove");
    removeButton.appendChild(butText);
    //add button to col
    var brake = document.createElement("br");
    col.appendChild(brake);
    col.appendChild(removeButton);
    //
    //
    //create break for the rows
    container.appendChild(brake);  
}
//add the description about
function AddAboutDescription(){
    var messageBox = document.getElementById("writeBox").value;
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").update({
        AboutMe: messageBox
    });
}

//dynamic form for experience
function createcol2(){
 //make row count 1
 rowCount+= 1;
 var RowNumberString = rowCount.toString();
 idString = "row"+ RowNumberString;
 btnnString = "removebutton"+RowNumberString;
//get the element you want to add the new inputs to
 var container = document.getElementById("Certi");
 //the new element
 var newRow = document.createElement("div");
 //set its attributes
 newRow.setAttribute("class", "row");
 newRow.setAttribute("id", idString);
 //add new row to the form slide
 container.appendChild(newRow);
 //
 //now create col to row
 var col = document.createElement("div");
 //set its attributes
 col.setAttribute("class","col");
 //add to the row
 newRow.appendChild(col);
 //
 //and inputs to the col
 //label input
 var labelCertiName = document.createElement("label");
 //its attributes
 labelCertiName.setAttribute("for","Certif_Name");
 //add text to it
 var text = document.createTextNode("Certification");
 labelCertiName.appendChild(text);
 //add label to form
 var Certiinput = document.createElement("input");
 //attributes
 Certiinput.setAttribute("type","text");
 Certiinput.setAttribute("name","Certif_Name");
 Certiinput.setAttribute("id","Certif_Name2");
 Certiinput.setAttribute("class","form-control");
 Certiinput.setAttribute("placeholder","Enter Certification name");
 //add input and label to col div
 col.appendChild(labelCertiName);
 col.appendChild(Certiinput);
 //
 //
 //create new col for institution
 var col = document.createElement("div");
 //set its attributes
 col.setAttribute("class","col");
 //add to the row
 newRow.appendChild(col);
 //
 //and inputs to the col
 //label input
 var labelInst = document.createElement("label");
 //its attributes
 labelInst.setAttribute("for","Institution");
 //add text to it
 var textQ = document.createTextNode("Institution");
 labelInst.appendChild(textQ);
 //add label to form
 var Instinput = document.createElement("input");
 //attributes
 Instinput.setAttribute("type","text");
 Instinput.setAttribute("name","Institution");
 Instinput.setAttribute("id","Institution2");
 Instinput.setAttribute("class","form-control");
 Instinput.setAttribute("placeholder","Enter Institution");
 //add input and label to col div
 col.appendChild(labelInst);
 col.appendChild(Instinput);
 //
 //
 //create new col for Date aquired
 var col = document.createElement("div");
 //set its attributes
 col.setAttribute("class","col");
 //add to the row
 newRow.appendChild(col);
 //
 //and inputs to the col
 //label input
 var labelAqu = document.createElement("label");
 //its attributes
 labelAqu.setAttribute("for","Aqu");
 //add text to it
 var textQ = document.createTextNode("Date Acquired");
 labelAqu.appendChild(textQ);
 //add label to form
 var Dateinput = document.createElement("input");
 //attributes
 Dateinput.setAttribute("type","date");
 Dateinput.setAttribute("name","Aqu");
 Dateinput.setAttribute("id","Aqu");
 Dateinput.setAttribute("class","form-control");
 Dateinput.setAttribute("placeholder","Enter Date");
 //add input and label to col div
 col.appendChild(labelAqu);
 col.appendChild(Dateinput);
 //
 //
 //create new col for Date ex
 var col = document.createElement("div");
 //set its attributes
 col.setAttribute("class","col");
 //add to the row
 newRow.appendChild(col);
 //
 //and inputs to the col
 //label input
 var labelEX = document.createElement("label");
 //its attributes
 labelEX.setAttribute("for","EX");
 //add text to it
 var textQ1 = document.createTextNode("Expiration date");
 labelEX.appendChild(textQ1);
 //add label to form
 var EXinput = document.createElement("input");
 //attributes
 EXinput.setAttribute("type","date");
 EXinput.setAttribute("name","EX");
 EXinput.setAttribute("id","EX2");
 EXinput.setAttribute("class","form-control");
 EXinput.setAttribute("placeholder","Enter Date");
 //add input and label to col div
 col.appendChild(labelEX);
 col.appendChild(EXinput);
 //
 //
 //add remove button
 //create new col for remove button
 var col = document.createElement("div");
 //set its attributes
 col.setAttribute("class","col");
 //add to the row
 newRow.appendChild(col);
 //add button element
 var removeButton = document.createElement("button");
 //set its attributes
 removeButton.setAttribute("id","removeButtoncerti");
 removeButton.setAttribute("class","btn btn-secondary");
 removeButton.setAttribute("onclick","RemoveRow(idString)");
 //add text to button
 var butText = document.createTextNode("Remove");
 removeButton.appendChild(butText);
 //add button to col
 var brake = document.createElement("br");
 col.appendChild(brake);
 col.appendChild(removeButton);
 //
 //
 //create break for the rows
 container.appendChild(brake);  

}
//function to disable an enable about us message box
function changeInput(){
    var box1 = document.getElementById("Write");
    if (box1.checked == true) {
        document.getElementById("writeBox").disabled = false;
        var nodes = document.getElementById("About").getElementsByTagName("button");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].disabled = true;            
        }
    }else{
        document.getElementById("writeBox").disabled = true;
        var nodes = document.getElementById("About").getElementsByTagName("a");
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].disabled = false;
    }
}
}
function RemoveRow(x){
    var rowID = document.getElementById(x);
    rowID.remove();
// minus the string input by one find a way
}
function createCol(){
    var x = document.getElementById("job1")
    document.getElementById("job1").style.display ="block";
}
/* function redirect() {
    "https://vitawizjobseeker.web.app/#/home";
    window.location(url);
} */
function TypeDoc(){
    let fontFamiliy = 'sans-serif'
    ctx.font = 'normal 30px ${fontFamily}, monospace';
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';
    ctx.direction = 'ltr';

    var txt = document.getElementById('Name').value;
    var metrics = ctx.measureText(oldTxt);
    var w = metrics.width;
    ctx.clearRect(50, 110, w, -40);
    ctx.fillText(txt, 50, 100);
    oldTxt = txt;
}

var currentTab = 0;
showTab(currentTab);

function showTab(n){
    var x = document.getElementsByClassName("Win");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("previous").style.display = "none";
    } else {
        document.getElementById("previous").style.display = "inline";
    }
    if (n == (x.length-1)) {
        document.getElementById("next").innerHTML = "finish";
        document.getElementById("next").setAttribute("data-toggle","modal");
        document.getElementById("next").setAttribute("onclick","finishModal()")
        

    } else {
        document.getElementById("next").innerHTML = "Next";
        document.getElementById("next").setAttribute("onclick","nextPrev(1)")

    }
    stepindicator(n)
}
function finishModal() {
    $('#finishmodal').modal('show');
}
function donothing(){
    console.log("nothing");
}

function nextPrev(n){
    var x = document.getElementsByClassName("Win");
    x[currentTab].style.display = "none";
    currentTab += n;
    if (currentTab>= x.length){
        /* $('#myModal').modal('show') */
       /*  document.getElementById("MSForm").submit(); */
       $('#CVModal').modal('show')
       /* return false; */  
    }
    if (currentTab == 2){
       SelectedButtons();
    }
    showTab(currentTab);
}

function stepindicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

//function to limit number of checked about us buttons
$(document).ready(function(){
    var Maximus = 3;
    $("li").on("click","a",function(e){
        e.preventDefault();
        if($("a.active").length >= Maximus){
            $('#messageLimit').slideDown();
            if ($(this).hasClass("active")){
                $(this).toggleClass("active");
                $("#messageLimit").slideUp();   
            }
        }else{
            $("#messageLimit").slideUp();
            $(this).toggleClass("active");
        }
    });
});
//function to insert in next button, it add the selected buttons on about me to the database
function SelectedButtons() {
    var box1 = document.getElementById("Write");
    if (box1.checked == false ) {
        var wordsSelected = [];
        var Counter = 0
        var idNumber = 0;
        var idStart = "bu";
        var Aboutme =""
        while (idNumber < 10) {
            idNumber++;
            var element = getValue(idStart+idNumber);
            if (element.classList.contains("active")) {
                var text = element.textContent;
                wordsSelected.push(text);
                Counter++;
            }  
            if (Counter == 3){
                break
            }
        }
        if (wordsSelected.includes("Enthusiastic")){
            Aboutme = "I’m disciplined and enthusiastic person who seeks to take initiative, take life on and provide a revolution of change, reach my goals and milestones to the best of my ability. I want the best for myself and those around me and shall live with that intent.";
        }else{
            Aboutme = "Dedicated and experienced,  willing to devote myself to my job. With the experience gained over the years, I believe I am well equipped for the job.";
        }
        db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").update({
            AboutMe: Aboutme
        });
        
    }
}
//change region on change
function ChangeRegion() {
    var feild = getValue("City").value;
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").update({
        Region: feild
    });
}
//change name
function ChangeNameCV() {
    var feild = getValue("Name").value;
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").update({
        Name: feild
    });
}
//change the phone
function ChangeMobileNum() {
    var feild = getValue("Phone").value;
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").update({
        Phone: feild
    });
}
//Export CV to PDF and redirect
function ExportCV(){
    db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").collection("Export").doc("status").update({
        Exported : true
    });
    /* location.href='https://vitawizmycv.web.app/'; */
}   





 