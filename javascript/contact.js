window.onload = function() {
  document.querySelector("#send").addEventListener("click", provera);
}

function provera() {
  var firstName, lastName, eMail, subject, refirstName, relastName, reemail;

  firstName = document.getElementById("fname");
  lastName = document.getElementById("lname");
  eMail = document.getElementById("email");
  subject = document.getElementById("subject");
  var spanFirstName, spanLastName, spanEmail, spanSubject;
  spanFirstName = document.getElementById("spanName");
  spanLastName = document.getElementById("spanLast");
  spanEmail = document.getElementById("spanEmail");
  spanSubject = document.getElementById("spanSubject");




  refirstName = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}$/;
  relastName = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}$/;
  reemail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/

  var nizGreske, nizPodaci;

  nizGreske = new Array();
  nizPodaci = new Array();

  if (!refirstName.test(firstName.value)) {
    spanFirstName.classList.add("textred");
    spanFirstName.textContent = "Invalid Firstname";
  } else {
    nizPodaci.push("Firstname: " + firstName.value);
  }

  if (!relastName.test(lastName.value)) {
    spanLastName.classList.add("textred");
    spanLastName.textContent = "Invalid Lastname";
  } else {
    nizPodaci.push("Lastname: " + lastName.value);
  }

  if (!reemail.test(eMail.value)) {
    spanEmail.classList.add("textred");
    spanEmail.textContent = "Invalid Email";
  } else {
    nizPodaci.push("Email addres: " + eMail.value);
  }

  if (!subject.value) {
    spanSubject.classList.add("textred");
    spanSubject.textContent = "Invalid Subject";
  }




  var ispis = "<ul>";

  if (nizGreske.length != 0) {
    for (var i = 0; i < nizGreske.length; i++) {
      ispis += "<li>" + nizGreske[i] + "</li>";
    }
  } else {
    for (var i = 0; i < nizPodaci.length; i++) {
      ispis += "<li>" + nizPodaci[i] + "</li>";
    }
  }
  ispis += "</ul>";

  //  document.getElementById("ispis").style.display = "block";
  document.getElementById("ispis").innerHTML = ispis;


}