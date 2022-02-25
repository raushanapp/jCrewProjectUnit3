
import {navbar,footer} from './components/navbar.js'

let homeDiv = document.getElementById('navbarContainer');
let footerDiv = document.getElementById('footerPage')
homeDiv.innerHTML =navbar()







document.querySelector("#submit").addEventListener("click", call);

function call() {
  var cvv = document.querySelector("#cvv").value;
  var exdate = document.querySelector("#exdate").value;

  if (cvv === "123" && exdate === "01-01-2022") {
    alert("Otp Sent Succesfully");
    window.location.href =  "Otp.html";
  } else {
    alert("Oops!", "Something went wrong on the page!", "error")
  }
}