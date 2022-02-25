


import {navbar,footer} from './components/navbar.js'

let homeDiv = document.getElementById('navbarContainer');
let footerDiv = document.getElementById('footerPage')
homeDiv.innerHTML =navbar()
footerDiv .innerHTML = footer()
// import {navbar,footer} from './components/navbar.js'

// let signBtn = document.getElementById('sign101')
// console.log(signBtn)
// signBtn.innerText = 'hey'

// console.log('hey one')

let cart = JSON.parse(localStorage.getItem('cart'));

let cartCount = document.getElementById('cartCount')

cartCount.innerText = cart.length