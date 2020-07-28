//sets default tab to be selected when page finishes loading
$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById("defaultOpen").click();
});

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//function called on submit. Mortgage calculations performed here then sent to html.
function formSubmit(event) {
  event.preventDefault();
  var payment = 0;
  var p = document.getElementById("principal").value;
  var r = document.getElementById("interestr").value;
  var n = document.getElementById("numpay").value;
  coeff = Math.pow((1+r), n);
  payment = p*(r*coeff/(coeff-1));
  document.getElementById("calcOut").innerHTML = payment;
}