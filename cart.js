import {navbar,footer} from './components/navbar.js'
let womenDiv = document.getElementById('navbarContainer')
let footerDiv = document.getElementById('footerPage')

womenDiv.innerHTML =navbar()


let arr = localStorage.getItem('cart');
if (!arr) {
    arr = [];
    localStorage.setItem("cart", JSON.stringify(arr)); 
}
else {
    arr = JSON.parse(arr);
//   totalDisplay(total)

}

let total = arr.reduce ((acc,curr)=>{
   return acc +  +curr.price;
},0)
// let arr = JSON.parse(localStorage.getItem('cart'))||[]
let cartCount = document.getElementById('cartCount')
// showMensProduct(arr)

cartCount.innerText = arr.length
// console.log(arr)

let cartDiv = document.getElementById('cartPage')


// let remove  = [];
let showMensProduct = (arr) => {
    //  console.log('arr:',arr)
    cartDiv.innerHTML = null;

    arr.forEach((ele,index)=>{
        // console.log(name,image_url)
        let appendDiv = document.createElement('div');
        appendDiv.setAttribute('class','appendDiv')
        let image = document.createElement('img');
        image.src = ele.image_url
        image.setAttribute('id', 'imageUrl')

        let nameB = document.createElement('p');
        nameB.innerText =ele.name;
        nameB.setAttribute('class','ptagprice')

        let price1 = document.createElement('p');
        price1.innerText = `Rs.${ele.price}`;
        price1.setAttribute('class','ptagprice')

        // let priceStrike = document.createElement('p');
        // priceStrike.innerText =  `Rs.${strikedoffprice}`;
        // priceStrike.setAttribute('class','ptagprice1')

        // let priceDiv = document.createElement('div');
        // priceDiv.setAttribute('class','priceDiv');

        let clickAdd = document.createElement('button')
        clickAdd.innerText = 'Delete Item'
        clickAdd.setAttribute('class','shopBtn')

        // let sendToData = {
        //     image_url,
        //     name,
        //     price,
        //     // strikedoffprice,
        // };
        // remove.push(sendToData)

        clickAdd.onclick = () =>{
            // let index =0;
           itemDelete(index)
           console.log('click')
        }

        // priceDiv.append(price1,priceStrike);

        appendDiv.append(image,nameB,price1,clickAdd)
        cartDiv.append(appendDiv)
    })
}

let  itemDelete =(ele,index) => {
  arr.splice(index,1)
  localStorage.setItem('cart',JSON.stringify(arr))
 cartCount.innerText = arr.length

   showMensProduct(arr)
  totalDisplay(total)


}


let totalDisplay = (total) =>{
    console.log("total:",total)
  
    let totalamount = document.querySelector('.substotal1') 
    let totalamount1 = document.querySelector('.ematednumber') 

    totalamount.innerText = `INR ${total}`
    totalamount1.innerText = `INR ${total}`
    showMensProduct(arr)

}

totalDisplay(total)

showMensProduct(arr)


