
// DOM element
const profileList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const menuLinks = document.querySelectorAll('.menu');
const homeLinks = document.querySelectorAll('.active');
document.addEventListener("DOMContentLoaded", AddProfileDetail());

//setup profile
/*const setupProfile = (data) => {

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
}*/

// function to query how many CV fields
function AddProfileDetail(){
  //var userID = cred.user.uid;
  db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").where("Archived","==", false).get().then(function(querySnapshot){
    //  var numDoc = snapshot.size;
      if (querySnapshot.empty == false) {
          // add to form the headings
          var container = document.getElementById("CV");
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
          //<th> Job Title
          var tableCol = document.createElement("th");
          tableCol.setAttribute("scope","col");
          var BEText = document.createTextNode("Job Title");
          tableCol.appendChild(BEText);
          HeadElement.appendChild(tableCol);
          //<th> Date Created
          var TableCol2 = document.createElement("th");
          TableCol2.setAttribute("scope","col");
          var BEText2 = document.createTextNode("Date Created");
          TableCol2.appendChild(BEText2);
          HeadElement.appendChild(TableCol2);
          //<th> Cover Letter
          var TableCol3 = document.createElement("th");
          TableCol3.setAttribute("scope","col");
          var BEText3 = document.createTextNode("Cover Letter");
          TableCol3.appendChild(BEText3);
          HeadElement.appendChild(TableCol3);
          //<th> View
          var TableCol4 = document.createElement("th");
          TableCol4.setAttribute("scope","col");
          var BEText4 = document.createTextNode(" ");
          TableCol4.appendChild(BEText4);
          HeadElement.appendChild(TableCol4);
          //<th> Edit
          var TableCol5 = document.createElement("th");
          TableCol5.setAttribute("scope","col");
          var BEText5 = document.createTextNode(" ");
          TableCol5.appendChild(BEText5);
          HeadElement.appendChild(TableCol5);
          //<th> Delete
          var TableCol6 = document.createElement("th");
          TableCol6.setAttribute("scope","col");
          var BEText6 = document.createTextNode("");
          TableCol6.appendChild(BEText6);
          HeadElement.appendChild(TableCol6);
          //create table body<tbody>
          var TableBody = document.createElement("tbody")
          TableBody.setAttribute("id","TableBody");
          newTable.appendChild(TableBody);          
          //for loop to add the elements
          /* for (let index = 1; index <= numDoc; index++) {
              createExistingCV(index); 
          } */
          querySnapshot.forEach(function(doc){
            var CVid = doc.id; 
            var index = CVid.charAt(CVid.length-1);

            createExistingCV(index)
          });
      }
  });
}


function createExistingCV(n) {
  var ViewLink ="";
  var EditLink = "www.vitawizcreateCV.web.app";
  EditLink = EditLink+ "?"+ "sDHiAGDFbrVjC6wO2RhwxD0HGEC2" + "&"+ n;
   var TableBody1 = document.getElementById("TableBody");
   //add details
  //first row <tr>
  var FirstRow = document.createElement("tr");
  FirstRow.setAttribute("id","FirstRow");
  TableBody1.appendChild(FirstRow);
  //column 1 <td>
  var col1 = document.createElement("td");
  col1.setAttribute("id", "JobTitle")
  FirstRow.appendChild(col1);

  // add col 2 to first row
  var col2 = document.createElement("td");
  col2.setAttribute("id", "DateCreated")
  FirstRow.appendChild(col2);

  // add col 3 to first row
  var col3 = document.createElement("td");
  col3.setAttribute("id", "Cover")
  FirstRow.appendChild(col3);

  // add col 4 to first row
  var col4 = document.createElement("td");
  col4.setAttribute("id", "View");
  //insert what you have from line 129-132
  //ViewLink = ""
  FirstRow.appendChild(col4);

  // add col 5 to first row
  var col5 = document.createElement("td");
  col5.setAttribute("id", "Edit")
  var editLink = document.createElement("a");
  editLink.setAttribute("id", "link");
  editLink.setAttribute("href", EditLink);
  var editText = document.createTextNode("Edit");
  editLink.appendChild(editText);
  col5.appendChild(editLink);
  FirstRow.appendChild(col5);

  // add col 6 to first row
  var col6 = document.createElement("td");
  col6.setAttribute("id", "Delete")
  FirstRow.appendChild(col6);

   //now to get data from databse and add
   //add CV details
   //var userID = cred.user.uid;
   var JobTitle = '';
   var DateCreated = '';
   var CoverLetter = '';
   var ViewCV = '';
   var DeleteCV = '';
   db.collection("test").doc("sDHiAGDFbrVjC6wO2RhwxD0HGEC2").collection("testCV").doc("CV").get().then(function(doc){
       JobTitle += doc.data().JobRole;
       DateCreated += doc.data().CreationDate;
       CoverLetter += doc.data().CoverLetter;
       ViewCV += doc.data().Link;
       var AttachedCover ='';
      if (CoverLetter ==true){
        AttachedCover = "Yes";
      }else{
        AttachedCover ="No";
      }
      var str = "View";
      var result = str.link(ViewCV);
       
       //add the info to column
       document.getElementById("JobTitle").innerHTML = JobTitle;
       document.getElementById("DateCreated").innerHTML = DateCreated;
       document.getElementById("Cover").innerHTML = AttachedCover;
       document.getElementById("View").innerHTML = result;
   });
   //add the info to column

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