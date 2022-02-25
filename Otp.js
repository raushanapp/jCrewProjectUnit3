import {navbar,footer} from './components/navbar.js'

let homeDiv = document.getElementById('navbarContainer');
let footerDiv = document.getElementById('footerPage')
homeDiv.innerHTML =navbar()

  document.querySelector("#Prashant_My").addEventListener("submit", confirm);

  function confirm(event) {
    event.preventDefault();
    var otp = document.querySelector("#Prashant_OTP").value;
    if (otp == "1234") {
      document.querySelector("#Prashant_My").textContent = "";
      window.location.href = "Success.html"
    } else {
        alert("Oops!", "Something went wrong on the page!", "error")
    }
  }
